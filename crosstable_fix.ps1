$ErrorActionPreference = "Stop"
$PAT = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("cGF0bHpxaUJKQjZESmlVMmcuZDI5MTA4YTI4NWNmNDlmNDFkZjFmNzA2OTczNTQ0OTNkMDA2MTYwNjg2MDg2ZDQ1YzFkM2Y2NjhiYWJmZjU0ZQ=="))
$BASE="app0MYHVyhTYFsDqV"; $hdr=@{Authorization="Bearer $PAT"}; $hdrJson=@{Authorization="Bearer $PAT";"Content-Type"="application/json"}
$PT="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("PERSONAS PROMEZA CRM")
$ET="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("ENTIDADES PROMEZA CRM")
$OUT="C:\Users\Vanessa\AppData\Local\Temp\promeza-diag\crosstable_dudosos.txt"
function NM($s){ $t=([string]$s).ToLower().Normalize([Text.NormalizationForm]::FormD); $t=$t -replace '\p{Mn}',''; ($t -replace '\s+',' ').Trim() }
function CE($s){ if($s -match '([A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,})'){$matches[1].ToLower()} else {''} }
function LoadAll($url){ $L=New-Object System.Collections.Generic.List[object]; $off=$null
  do{ $u="$url`?pageSize=100&fields%5B%5D=_data"; if($off){$u+="&offset=$off"}; $r=Invoke-RestMethod -Uri $u -Headers $hdr; foreach($rec in $r.records){ $d=$null;try{$d=$rec.fields._data|ConvertFrom-Json}catch{}; if($d -and $d.id){ $L.Add(@{recId=$rec.id; d=$d}) } }; $off=$r.offset } while($off); $L }

"cargando..."; $P=LoadAll $PT; $E=LoadAll $ET
"personas=$($P.Count) entidades=$($E.Count)"
$entByName=@{}
foreach($e in $E){ $n=NM $e.d.name; if($n -and -not $entByName.ContainsKey($n)){$entByName[$n]=$e} }

$fix=New-Object System.Collections.Generic.List[object]   # @{persona=..; entity=..}
$review=New-Object System.Collections.Generic.List[string]
foreach($p in $P){
  $pn=NM "$($p.d.first) $($p.d.last)"; $pe=CE $p.d.email
  if(-not $pn -or -not $entByName.ContainsKey($pn)){continue}
  $ent=$entByName[$pn]; $ee=CE $ent.d.email
  if($pe -and $ee -and $pe -eq $ee){ $fix.Add(@{persona=$p; entity=$ent}) }
  else { $review.Add("$($p.d.id)`t$($p.d.first) $($p.d.last)`t$($p.d.email)`t=> $($ent.d.id)`t$($ent.d.name)") }
}
"SEGUROS (nombre+correo) a arreglar: $($fix.Count) | DUDOSOS (solo nombre) para revisar: $($review.Count)"
# write review list
$review | Set-Content -Path $OUT -Encoding UTF8
"lista de dudosos escrita en: $OUT"

if($env:DRYRUN -eq "1"){ "DRYRUN - no se cambio nada."; return }

# accumulate persona tags into their target entity
$entPatch=@{}   # entity recId -> merged data
$delRecIds=New-Object System.Collections.Generic.List[string]
foreach($m in $fix){
  $ent=$m.entity; $per=$m.persona
  $ed = if($entPatch.ContainsKey($ent.recId)){$entPatch[$ent.recId]}else{$ent.d}
  $cur=@(); if($ed.tags){$cur=@($ed.tags)}
  $ed.tags=@($cur + @($per.d.tags) | Where-Object {$_} | Select-Object -Unique)
  $entPatch[$ent.recId]=$ed
  $delRecIds.Add($per.recId)
}
"entidades a actualizar (etiquetas): $($entPatch.Count) | contactos a borrar: $($delRecIds.Count)"

# patch entities (merge tags)
$recs=New-Object System.Collections.Generic.List[object]
foreach($rid in $entPatch.Keys){ $d=$entPatch[$rid]; $recs.Add(@{id=$rid; fields=@{ "Etiquetas"=(@($d.tags) -join ", "); "_data"=($d|ConvertTo-Json -Depth 8 -Compress) }}) }
$np=0; for($i=0;$i -lt $recs.Count;$i+=10){ $b=$recs[$i..([Math]::Min($i+9,$recs.Count-1))]; $body=@{records=@($b);typecast=$true}|ConvertTo-Json -Depth 9; Invoke-RestMethod -Uri $ET -Headers $hdrJson -Method Patch -Body ([System.Text.Encoding]::UTF8.GetBytes($body))|Out-Null; $np+=$b.Count; Start-Sleep -Milliseconds 205 }
"entidades actualizadas: $np"
# delete the duplicate personas
$nd=0; for($i=0;$i -lt $delRecIds.Count;$i+=10){ $b=$delRecIds[$i..([Math]::Min($i+9,$delRecIds.Count-1))]; $qs=($b|ForEach-Object{"records[]=$_"}) -join '&'; Invoke-RestMethod -Uri "$PT`?$qs" -Headers $hdr -Method Delete|Out-Null; $nd+=$b.Count; Start-Sleep -Milliseconds 205 }
"contactos duplicados borrados: $nd"; "LISTO."