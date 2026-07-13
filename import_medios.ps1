$ErrorActionPreference = "Stop"
$PAT = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("cGF0bHpxaUJKQjZESmlVMmcuZDI5MTA4YTI4NWNmNDlmNDFkZjFmNzA2OTczNTQ0OTNkMDA2MTYwNjg2MDg2ZDQ1YzFkM2Y2NjhiYWJmZjU0ZQ=="))
$BASE="app0MYHVyhTYFsDqV"; $hdr=@{Authorization="Bearer $PAT"}; $hdrJson=@{Authorization="Bearer $PAT";"Content-Type"="application/json"}
$PT="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("PERSONAS PROMEZA CRM")
$ET="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("ENTIDADES PROMEZA CRM")
$geoDir="C:\Users\Vanessa\AppData\Local\Temp\promeza-diag\geo"
$F_TEL="Tel"+[char]0xE9+"fono"; $F_PAIS="Pa"+[char]0xED+"s"
$TAG="Medios de Comunicaci"+[char]0xF3+"n Cristianos"
$SRC="C:\Users\Vanessa\Downloads\Medios de Comunicacion Cristianos .xlsx"
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zipMap=@{}
foreach($file in @(@("$geoDir\US.txt","Estados Unidos"),@("$geoDir\PR.txt","Puerto Rico"))){ foreach($ln in [System.IO.File]::ReadAllLines($file[0])){ $c=$ln -split "`t"; if($c.Count -lt 11){continue}; $z=$c[1].Trim(); if(-not $z){continue}; $cty=if($c[5]){$c[5]}else{$c[2]}; $zipMap[$z]=@{city=$c[2];state=$c[3];county=$cty;lat=[double]$c[9];lng=[double]$c[10];country=$file[1]} } }
function Norm5($z){ $z=([string]$z) -replace '\.0+$',''; $d=($z -replace '\D',''); if($d.Length -ge 5){$d.Substring(0,5)} elseif($d.Length -gt 0){$d.PadLeft(5,'0')} else {''} }
function NKey($s){ (([string]$s).ToLower().Trim() -replace '\s+',' ') }
function StripAcc($s){ ([string]$s) -replace '[áàä]','a' -replace '[éèë]','e' -replace '[íìï]','i' -replace '[óòö]','o' -replace '[úùü]','u' -replace '[ñ]','n' }
function CleanEmail($s){ if($s -match '([A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,})'){$matches[1].ToLower()} else {''} }
function CleanPhone($s){ $s=([string]$s).Trim().TrimStart("'").Trim('"').Trim(); $s=$s -replace '\.0$',''; if($s -match '\d'){$s} else {''} }
function CleanWeb($s){ $s=([string]$s).Trim(); if($s -match '^(?i)(https?://|www\.)'){return $s}; if($s -match '^[\w.\-]+\.[A-Za-z]{2,}$'){return $s}; return '' }
function MapRole($c){ $x=(StripAcc $c).ToLower(); if($x -match 'co.?pastor'){'co-pastor'} elseif($x -match 'pastor'){'pastor'} elseif($x -match 'lider'){'lider'} elseif($x -match 'diac'){'diacono'} elseif($x -match 'musico'){'musico'} elseif($x -match 'evangel'){'evangelista'} elseif($x -match 'misi'){'misionero'} elseif($x -match 'maestr'){'maestro'} elseif($x -match 'miembro'){'miembro'} elseif($x){'otro'} else {'otro'} }
function MapType($t){ $x=(StripAcc $t).ToLower(); if($x -match 'radio'){'radio'} elseif($x -match 'tele|tv'){'television'} elseif($x -match 'prensa|revista|peri|escrit'){'prensa'} elseif($x -match 'web|digital|redes|social|podcast|internet'){'digital'} else {'otro'} }

# ---- read xlsx by fixed column letter (layout is stable) ----
$zf=[System.IO.Compression.ZipFile]::OpenRead($SRC)
function RE($zfile,$name){ $e=$zfile.Entries|Where-Object{$_.FullName -eq $name}; if(-not $e){return $null}; $s=New-Object System.IO.StreamReader($e.Open()); $t=$s.ReadToEnd();$s.Close();$t }
function Dec($s){ $s -replace '&amp;','&' -replace '&lt;','<' -replace '&gt;','>' -replace '&quot;','"' -replace '&#39;',"'" }
$ss=RE $zf "xl/sharedStrings.xml"; $st=New-Object System.Collections.Generic.List[string]
if($ss){ foreach($m in [regex]::Matches($ss,'<si>(.*?)</si>','Singleline')){ $sb=''; foreach($tm in [regex]::Matches($m.Groups[1].Value,'<t[^>]*>(.*?)</t>','Singleline')){$sb+=$tm.Groups[1].Value}; $st.Add((Dec $sb)) } }
$xml=RE $zf "xl/worksheets/sheet1.xml"; $rows=@{}
foreach($cm in [regex]::Matches($xml,'<c r="([A-Z]+)(\d+)"([^>]*?)(?:/>|>(.*?)</c>)','Singleline')){
  $col=$cm.Groups[1].Value;$rn=[int]$cm.Groups[2].Value;$at=$cm.Groups[3].Value;$bd=$cm.Groups[4].Value
  $val='';$vm=[regex]::Match($bd,'<v>(.*?)</v>','Singleline'); if($vm.Success){$val=$vm.Groups[1].Value}else{$im=[regex]::Match($bd,'<t[^>]*>(.*?)</t>','Singleline');if($im.Success){$val=$im.Groups[1].Value}}
  if($at -match 't="s"'){ $ix=0; if([int]::TryParse($val,[ref]$ix) -and $ix -lt $st.Count){$val=$st[$ix]} }
  if(-not $rows.ContainsKey($rn)){$rows[$rn]=@{}}; $rows[$rn][$col]=(Dec $val)
}
$zf.Dispose(); $sk=$rows.Keys|Sort-Object
if(($sk|Measure-Object).Count -lt 2){ "xlsx sin filas"; return }
function G($r,$c){ if($r.ContainsKey($c)){ ([string]$r[$c]).Trim() } else { '' } }

# ---- existing indexes ----
$exP=@{}; $off=$null
do{ $u="$PT`?pageSize=100&fields%5B%5D=_data"; if($off){$u+="&offset=$off"}; $r=Invoke-RestMethod -Uri $u -Headers $hdr
  foreach($rec in $r.records){ $d=$null;try{$d=$rec.fields._data|ConvertFrom-Json}catch{}; if(-not $d){continue}; $k=(CleanEmail $d.email)+"|"+(NKey "$($d.first) $($d.last)"); if(-not $exP.ContainsKey($k)){$exP[$k]=@{recId=$rec.id;data=$d}} }
  $off=$r.offset } while($off)
"personas existentes: $($exP.Count)"
$exE=@{}; $off=$null
do{ $u="$ET`?pageSize=100&fields%5B%5D=_data"; if($off){$u+="&offset=$off"}; $r=Invoke-RestMethod -Uri $u -Headers $hdr
  foreach($rec in $r.records){ $d=$null;try{$d=$rec.fields._data|ConvertFrom-Json}catch{}; if($d -and $d.name){ $k=NKey $d.name; if(-not $exE.ContainsKey($k)){$exE[$k]=@{recId=$rec.id;id=$d.id;data=$d}} } }
  $off=$r.offset } while($off)
"entidades existentes: $($exE.Count)"

$touchedP=@{}; $newP=@{}; $touchedE=@{}; $newE=@{}; $pi=0; $ei=0
$cntPerson=0; $cntEntity=0; $matchP=0; $matchE=0
foreach($rn in ($sk|Select-Object -Skip 1)){
  $r=$rows[$rn]
  $first=(G $r 'A'); $last=(G $r 'B'); $company=((G $r 'C') -replace '\s+',' ').Trim()
  $tipoMedio=(G $r 'D'); $email=CleanEmail (G $r 'E'); $movil=CleanPhone (G $r 'F'); $ofi=CleanPhone (G $r 'G')
  $title=(G $r 'H'); $addr=(G $r 'I'); $city=(G $r 'J'); $state=(G $r 'K'); $zipRaw=(G $r 'L'); $country=(G $r 'M')
  $medio=(G $r 'N'); $iglesia=(G $r 'O'); $web=CleanWeb (G $r 'P'); $notes=(G $r 'Q')
  $name=("$first $last" -replace '\s+',' ').Trim()
  $phone=if($movil){$movil}else{$ofi}; $phones=@(); if($ofi -and $ofi -ne $phone){$phones=@($ofi)}
  $zip=Norm5 $zipRaw; $county=''; $lat=0;$lng=0
  if($zip -and $zipMap.ContainsKey($zip)){ $g=$zipMap[$zip]; if(-not $city){$city=$g.city}; if(-not $state){$state=$g.state}; $county=$g.county; if(-not $country){$country=$g.country}; $lat=$g.lat;$lng=$g.lng }

  # ---- media entity (from company) ----
  $entId=''; $entName=''
  if($company){
    $ek=NKey $company; $entName=$company
    if($exE.ContainsKey($ek)){ $ex=$exE[$ek]; $entId=$ex.id; $d=$ex.data; $cur=@(); if($d.tags){$cur=@($d.tags)}; $d.tags=@($cur+$TAG|Select-Object -Unique); $touchedE[$ex.recId]=$d; $matchE++ }
    elseif($newE.ContainsKey($ek)){ $entId=$newE[$ek].d.id }
    else{
      $ei++; $entId="mce"+("{0:D4}" -f $ei)
      $mtype=MapType $tipoMedio; $typeOther=if($mtype -eq 'otro' -and $tipoMedio){$tipoMedio}else{''}
      $ed=@{ id=$entId; name=$company; type=$mtype; typeOther=$typeOther; denominacion=""; email=$email; phone=$phone; phones=$phones; emails=@();
        address=$addr; zip=$zip; city=$city; state=$state; county=$county; country=$country; lat=$lat; lng=$lng; website=$web; social=@{ig="";fb="";tiktok="";x=""};
        size=$null; founded=""; parent=$null; schedule=@(); tags=@($TAG); status="activo"; medium=$tipoMedio }
      $newE[$ek]=@{ d=$ed }; $cntEntity++
    }
  }

  # ---- persona (only if a real person name exists) ----
  if($name){
    $nm=NKey $name; $key=$email+"|"+$nm
    $entLink=@(); if($entId){$entLink=@(@{id=$entId;name=$entName})}
    if($exP.ContainsKey($key)){ $ex=$exP[$key]; $d=$ex.data; $cur=@(); if($d.tags){$cur=@($d.tags)}; $d.tags=@($cur+$TAG|Select-Object -Unique)
      if($entId){ $ke=@(); if($d.entities){$ke=@($d.entities)}; if(-not ($ke|Where-Object{$_.id -eq $entId})){ $ke+=@{id=$entId;name=$entName}; $d.entities=$ke } }
      $touchedP[$ex.recId]=$d; $matchP++ }
    elseif($newP.ContainsKey($key)){ if($entId){ $d=$newP[$key].d; $ke=@($d.entities); if(-not ($ke|Where-Object{$_.id -eq $entId})){ $d.entities=@($ke+@{id=$entId;name=$entName}) } } }
    else{
      $role=MapRole $title; $roleOther=if($role -eq 'otro'){$title}else{''}
      $noteParts=@(); foreach($p in @(@('Tipo de medio',$tipoMedio),@('Iglesia',$iglesia),@('Notas',$notes))){ if($p[1]){ $noteParts+=("$($p[0]): $($p[1])") } }
      $pi++; $prid="mcc"+("{0:D4}" -f $pi)
      $d=@{ id=$prid; first=$first; last=$last; role=$role; roleOther=$roleOther; email=$email; phone=$phone; phones=$phones; emails=@();
        address=$addr; zip=$zip; city=$city; state=$state; county=$county; country=$country; lat=$lat; lng=$lng; website=$web; social=@{ig="";fb="";tiktok="";x=""};
        entities=$entLink; tags=@($TAG); language="es"; status="activo"; stage="activo"; birthday=""; lastContact=""; color="#2F6BFF"; org=$company; notes=($noteParts -join ' | ') }
      $newP[$key]=@{ d=$d; org=$company }; $cntPerson++
    }
  }
}
"--- personas: nuevas=$($newP.Count) etiquetadas=$($touchedP.Count) | entidades: nuevas=$($newE.Count) etiquetadas=$($touchedE.Count) ---"
if($env:DRYRUN -eq "1"){
  "MUESTRA entidades:"; ($newE.Values|Select-Object -First 6)|ForEach-Object{ $d=$_.d; "  [$($d.id)] $($d.name) | tipo=$($d.type) | $($d.city),$($d.state) $($d.country) | tel=$($d.phone) | web=$($d.website)" }
  "MUESTRA personas:"; ($newP.Values|Select-Object -First 6)|ForEach-Object{ $d=$_.d; "  [$($d.id)] $($d.first) $($d.last) | $($d.email) | cargo=$($d.role) | medio=$($d.org)" }
  return
}
# create entities first (so persona links resolve), then patch existing entities
$eRecs=New-Object System.Collections.Generic.List[object]
foreach($o in $newE.Values){ $d=$o.d; $eRecs.Add(@{fields=@{ "CRM_ID"=$d.id;"Nombre"=$d.name;"Tipo"=$d.type;"Email"=$d.email;"Ciudad"=$d.city;"Estado/Provincia"=$d.state;"Sitio web"=$d.website;"Etiquetas"=($d.tags -join ", ");"$F_TEL"=$d.phone;"$F_PAIS"=$d.country;"_data"=($d|ConvertTo-Json -Depth 8 -Compress) }}) }
$ne=0; for($i=0;$i -lt $eRecs.Count;$i+=10){ $b=$eRecs[$i..([Math]::Min($i+9,$eRecs.Count-1))]; $body=@{records=@($b);typecast=$true}|ConvertTo-Json -Depth 9; Invoke-RestMethod -Uri $ET -Headers $hdrJson -Method Post -Body ([System.Text.Encoding]::UTF8.GetBytes($body))|Out-Null; $ne+=$b.Count; Start-Sleep -Milliseconds 210 }
"entidades nuevas: $ne"
$ePatch=New-Object System.Collections.Generic.List[object]
foreach($rid in $touchedE.Keys){ $d=$touchedE[$rid]; $ePatch.Add(@{ id=$rid; fields=@{ "Etiquetas"=(@($d.tags) -join ", ");"_data"=($d|ConvertTo-Json -Depth 8 -Compress) } }) }
$nep=0; for($i=0;$i -lt $ePatch.Count;$i+=10){ $b=$ePatch[$i..([Math]::Min($i+9,$ePatch.Count-1))]; $body=@{records=@($b)}|ConvertTo-Json -Depth 9; Invoke-RestMethod -Uri $ET -Headers $hdrJson -Method Patch -Body ([System.Text.Encoding]::UTF8.GetBytes($body))|Out-Null; $nep+=$b.Count; Start-Sleep -Milliseconds 210 }
"entidades etiquetadas: $nep"
# new personas
$pRecs=New-Object System.Collections.Generic.List[object]
foreach($o in $newP.Values){ $d=$o.d; $entNames=(@($d.entities)|ForEach-Object{$_.name}) -join ", "; $pRecs.Add(@{fields=@{ "CRM_ID"=$d.id;"Nombre"=$d.first;"Apellido"=$d.last;"Nombre completo"=("$($d.first) $($d.last)").Trim();"Cargo"=$d.role;"Email"=$d.email;"$F_TEL"=$d.phone;"ZIP"=$d.zip;"Ciudad"=$d.city;"Estado/Provincia"=$d.state;"$F_PAIS"=$d.country;"Etiquetas"=($d.tags -join ", ");"Entidades"=$entNames;"_data"=($d|ConvertTo-Json -Depth 8 -Compress) }}) }
$np=0; for($i=0;$i -lt $pRecs.Count;$i+=10){ $b=$pRecs[$i..([Math]::Min($i+9,$pRecs.Count-1))]; $body=@{records=@($b);typecast=$true}|ConvertTo-Json -Depth 9; Invoke-RestMethod -Uri $PT -Headers $hdrJson -Method Post -Body ([System.Text.Encoding]::UTF8.GetBytes($body))|Out-Null; $np+=$b.Count; Start-Sleep -Milliseconds 210 }
"personas nuevas: $np"
# patch existing personas (tag + link)
$pPatch=New-Object System.Collections.Generic.List[object]
foreach($rid in $touchedP.Keys){ $d=$touchedP[$rid]; $entNames=(@($d.entities)|ForEach-Object{$_.name}) -join ", "; $pPatch.Add(@{ id=$rid; fields=@{ "Etiquetas"=(@($d.tags) -join ", ");"Entidades"=$entNames;"_data"=($d|ConvertTo-Json -Depth 8 -Compress) } }) }
$npp=0; for($i=0;$i -lt $pPatch.Count;$i+=10){ $b=$pPatch[$i..([Math]::Min($i+9,$pPatch.Count-1))]; $body=@{records=@($b)}|ConvertTo-Json -Depth 9; Invoke-RestMethod -Uri $PT -Headers $hdrJson -Method Patch -Body ([System.Text.Encoding]::UTF8.GetBytes($body))|Out-Null; $npp+=$b.Count; Start-Sleep -Milliseconds 210 }
"personas etiquetadas: $npp"; "LISTO."
