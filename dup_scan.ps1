$ErrorActionPreference = "Stop"
$PAT = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("cGF0bHpxaUJKQjZESmlVMmcuZDI5MTA4YTI4NWNmNDlmNDFkZjFmNzA2OTczNTQ0OTNkMDA2MTYwNjg2MDg2ZDQ1YzFkM2Y2NjhiYWJmZjU0ZQ=="))
$BASE="app0MYHVyhTYFsDqV"; $hdr=@{Authorization="Bearer $PAT"}; $hdrJson=@{Authorization="Bearer $PAT";"Content-Type"="application/json"}
$PT="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("PERSONAS PROMEZA CRM")
$ET="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("ENTIDADES PROMEZA CRM")
$ST="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("ESTADO PROMEZA CRM")
$GROUP_CAP = 6          # skip email/phone/name groups larger than this (shared value, not a duplicate cluster)
$MAX_PERSONA_PAIRS = 2000   # Airtable long-text cell caps ~100k chars; ~2000 compressed pairs fit
$MAX_ENTITY_PAIRS  = 400
$PERSONA_MIN_SCORE = 3       # personas: require a shared email/phone (drop name-only score-2 homonyms)
$ENTITY_MIN_SCORE  = 2

function NM($s){ $t=([string]$s).ToLower().Normalize([Text.NormalizationForm]::FormD); $t=$t -replace '\p{Mn}',''; ($t -replace '\s+',' ').Trim() }
function PH($s){ ([string]$s) -replace '\D','' }

function LoadAll($url){
  $L=New-Object System.Collections.Generic.List[object]; $off=$null
  do{ $u="$url`?pageSize=100&fields%5B%5D=_data"; if($off){$u+="&offset=$off"}; $r=Invoke-RestMethod -Uri $u -Headers $hdr; foreach($rec in $r.records){ $d=$null;try{$d=$rec.fields._data|ConvertFrom-Json}catch{}; if($d -and $d.id){ $L.Add($d) } }; $off=$r.offset } while($off)
  return $L
}

# generic scorer: builds pairScore hashtable "idA|idB" -> score, from blocking maps.
function ScorePairs($items, $nameOf, $wName, $wEmail, $wPhone){
  $byE=@{}; $byP=@{}; $byN=@{}
  foreach($it in $items){
    $e=NM $it.email; $ph=PH $it.phone; $nm=NM (& $nameOf $it)
    if($e){ if(-not $byE.ContainsKey($e)){$byE[$e]=New-Object System.Collections.Generic.List[string]}; $byE[$e].Add($it.id) }
    if($ph.Length -ge 7){ if(-not $byP.ContainsKey($ph)){$byP[$ph]=New-Object System.Collections.Generic.List[string]}; $byP[$ph].Add($it.id) }
    if($nm -and ($nm -match ' ')){ if(-not $byN.ContainsKey($nm)){$byN[$nm]=New-Object System.Collections.Generic.List[string]}; $byN[$nm].Add($it.id) }
  }
  $score=@{}
  function AddGroups($map,$w,$score,$cap){
    foreach($k in $map.Keys){ $ids=$map[$k]; $n=$ids.Count; if($n -lt 2 -or $n -gt $cap){continue}
      for($i=0;$i -lt $n;$i++){ for($j=$i+1;$j -lt $n;$j++){ $a=$ids[$i];$b=$ids[$j]; if($a -eq $b){continue}; $key= if($a -lt $b){"$a|$b"}else{"$b|$a"}; $score[$key]=$w+([int]$score[$key]) } } }
  }
  AddGroups $byE $wEmail $score $GROUP_CAP
  AddGroups $byP $wPhone $score $GROUP_CAP
  AddGroups $byN $wName  $score $GROUP_CAP
  return $score
}

function ToPairs($score,$dismissedSet,$kind,$minScore){
  $out=New-Object System.Collections.Generic.List[object]
  foreach($k in $score.Keys){ $s=$score[$k]; if($s -lt $minScore){continue}; $ab=$k -split '\|'
    # Compress: omit dismissed:false (app treats missing as not-dismissed) to fit more pairs in Airtable's ~100k char cell.
    $p=[ordered]@{ idA=$ab[0]; idB=$ab[1]; score=$s }
    if($dismissedSet.Contains($k)){ $p.dismissed=$true }
    if($kind -eq 'entity'){ $p.kind='entity' }
    $out.Add([pscustomobject]$p) }
  return ($out.ToArray() | Sort-Object score -Descending)
}

"cargando personas..."; $P=LoadAll $PT; "  personas: $($P.Count)"
"cargando entidades..."; $E=LoadAll $ET; "  entidades: $($E.Count)"

# preserve previously-dismissed pairs
$dismP=New-Object System.Collections.Generic.HashSet[string]; $dismE=New-Object System.Collections.Generic.HashSet[string]
try{ $ex=Invoke-RestMethod -Uri "$ST`?maxRecords=1&filterByFormula=$([System.Uri]::EscapeDataString("{key}='dupReview'"))" -Headers $hdr
  $rec=$ex.records[0]; if($rec -and $rec.fields._data){ $od=$rec.fields._data|ConvertFrom-Json
    foreach($pp in @($od.personas)){ if($pp.dismissed){[void]$dismP.Add("$($pp.idA)|$($pp.idB)")} }
    foreach($pp in @($od.entities)){ if($pp.dismissed){[void]$dismE.Add("$($pp.idA)|$($pp.idB)")} } }
}catch{}
"dismissed previos: personas=$($dismP.Count) entidades=$($dismE.Count)"

$sP=ScorePairs $P { param($x) "$($x.first) $($x.last)" } 2 3 3
$sE=ScorePairs $E { param($x) "$($x.name)" } 3 2 2
$pairsP=@(ToPairs $sP $dismP 'person' $PERSONA_MIN_SCORE)
$pairsE=@(ToPairs $sE $dismE 'entity' $ENTITY_MIN_SCORE)
"pares crudos: personas=$($pairsP.Count) entidades=$($pairsE.Count)"
# score distribution
"personas por score: " + (($pairsP | Group-Object score | Sort-Object Name -Descending | ForEach-Object{ "$($_.Name):$($_.Count)" }) -join '  ')
"entidades por score: " + (($pairsE | Group-Object score | Sort-Object Name -Descending | ForEach-Object{ "$($_.Name):$($_.Count)" }) -join '  ')

$truncP = [Math]::Max(0, $pairsP.Count - $MAX_PERSONA_PAIRS)
$truncE = [Math]::Max(0, $pairsE.Count - $MAX_ENTITY_PAIRS)
$finalP = @($pairsP | Select-Object -First $MAX_PERSONA_PAIRS)
$finalE = @($pairsE | Select-Object -First $MAX_ENTITY_PAIRS)
if($truncP -gt 0){ "AVISO: truncados $truncP pares de personas de menor puntaje (limite de tamano del campo)" }
if($truncE -gt 0){ "AVISO: truncados $truncE pares de entidades de menor puntaje" }

$obj=@{ personas=$finalP; entities=$finalE }
$json=$obj|ConvertTo-Json -Depth 6 -Compress
"tamano _data: $($json.Length) chars (limite ~100000)"
if($env:DRYRUN -eq "1"){ "DRYRUN - no se guardo. personas=$($finalP.Count) entidades=$($finalE.Count)"; return }

# upsert into ESTADO key=dupReview
$find=Invoke-RestMethod -Uri "$ST`?maxRecords=1&filterByFormula=$([System.Uri]::EscapeDataString("{key}='dupReview'"))" -Headers $hdr
$rec=$find.records[0]
$fields=@{ key="dupReview"; _data=$json }
if($rec){ $body=@{records=@(@{id=$rec.id;fields=$fields})}|ConvertTo-Json -Depth 6; Invoke-RestMethod -Uri $ST -Headers $hdrJson -Method Patch -Body ([System.Text.Encoding]::UTF8.GetBytes($body))|Out-Null; "PATCH ok" }
else { $body=@{records=@(@{fields=$fields})}|ConvertTo-Json -Depth 6; Invoke-RestMethod -Uri $ST -Headers $hdrJson -Method Post -Body ([System.Text.Encoding]::UTF8.GetBytes($body))|Out-Null; "POST ok" }
"GUARDADO: personas=$($finalP.Count) entidades=$($finalE.Count). LISTO."
