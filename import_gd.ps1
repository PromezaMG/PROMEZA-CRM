$ErrorActionPreference = "Stop"
$PAT = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("cGF0bHpxaUJKQjZESmlVMmcuZDI5MTA4YTI4NWNmNDlmNDFkZjFmNzA2OTczNTQ0OTNkMDA2MTYwNjg2MDg2ZDQ1YzFkM2Y2NjhiYWJmZjU0ZQ=="))
$BASE="app0MYHVyhTYFsDqV"; $hdr=@{Authorization="Bearer $PAT"}; $hdrJson=@{Authorization="Bearer $PAT";"Content-Type"="application/json"}
$PT="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("PERSONAS PROMEZA CRM")
$geoDir="C:\Users\Vanessa\AppData\Local\Temp\promeza-diag\geo"
$F_TEL="Tel"+[char]0xE9+"fono"; $F_PAIS="Pa"+[char]0xED+"s"
$SRC="C:\Users\Vanessa\Downloads\export (17).csv"

$zipMap=@{}
foreach($file in @(@("$geoDir\US.txt","Estados Unidos"),@("$geoDir\PR.txt","Puerto Rico"))){ foreach($ln in [System.IO.File]::ReadAllLines($file[0])){ $c=$ln -split "`t"; if($c.Count -lt 11){continue}; $z=$c[1].Trim(); if(-not $z){continue}; $cty=if($c[5]){$c[5]}else{$c[2]}; $zipMap[$z]=@{city=$c[2];state=$c[3];county=$cty;lat=[double]$c[9];lng=[double]$c[10];country=$file[1]} } }
function Norm5($z){ $z=([string]$z) -replace '\.0+$',''; $d=($z -replace '\D',''); if($d.Length -ge 5){$d.Substring(0,5)} elseif($d.Length -gt 0){$d.PadLeft(5,'0')} else {''} }
function NKey($s){ (([string]$s).ToLower().Trim() -replace '\s+',' ') }
function StripAcc($s){ ([string]$s) -replace '[áàä]','a' -replace '[éèë]','e' -replace '[íìï]','i' -replace '[óòö]','o' -replace '[úùü]','u' -replace '[ñ]','n' }
function CleanEmail($s){ if($s -match '([A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,})'){$matches[1].ToLower()} else {''} }
function CleanPhone($s){ $s=([string]$s).Trim().TrimStart("'").Trim('"').Trim(); $s=$s -replace '\.0$',''; if($s -match '\d'){$s} else {''} }
function MapRole($c){ $x=(StripAcc $c).ToLower(); if($x -match 'co.?pastor'){'co-pastor'} elseif($x -match 'pastor'){'pastor'} elseif($x -match 'lider|leader'){'lider'} elseif($x -match 'diac'){'diacono'} elseif($x -match 'musico|music'){'musico'} elseif($x -match 'evangel'){'evangelista'} elseif($x -match 'misi|missio'){'misionero'} elseif($x -match 'maestr|teacher'){'maestro'} elseif($x -match 'miembro|member'){'miembro'} elseif($x){'otro'} else {'otro'} }

$csv = Import-Csv -Path $SRC -Encoding UTF8
"filas CSV: $($csv.Count)"

# existing personas: index by email AND by name
$exPe=@{}; $exPn=@{}; $off=$null
do{ $u="$PT`?pageSize=100&fields%5B%5D=_data"; if($off){$u+="&offset=$off"}; $r=Invoke-RestMethod -Uri $u -Headers $hdr
  foreach($rec in $r.records){ $d=$null;try{$d=$rec.fields._data|ConvertFrom-Json}catch{}; if(-not $d){continue}; $e=CleanEmail $d.email; $n=NKey "$($d.first) $($d.last)"
    if($e -and -not $exPe.ContainsKey($e)){$exPe[$e]=@{recId=$rec.id;data=$d}}; if($n -and -not $exPn.ContainsKey($n)){$exPn[$n]=@{recId=$rec.id;data=$d}} }
  $off=$r.offset } while($off)
"personas idx: email=$($exPe.Count) nombre=$($exPn.Count)"

$touched=@{}; $newByKey=@{}; $gi=0; $skip=0
foreach($row in $csv){
  $email=CleanEmail $row.Email
  $first=([string]$row.'First name').Trim(); $last=([string]$row.'Last name').Trim()
  $name=("$first $last" -replace '\s+',' ').Trim()
  if(-not $email -and -not $name){ $skip++; continue }
  if(-not $name){ $name=$email.Split('@')[0]; $first=$name; $last='' }
  # tags = Lists split on ';'
  $tags=@(); foreach($p in ([string]$row.Lists -split ';')){ $t=$p.Trim(); if($t){ $tags+=$t } }
  $tags=@($tags|Select-Object -Unique)

  $nm=NKey $name
  # dedup EMAIL-first, then name
  $m=$null
  if($email -and $exPe.ContainsKey($email)){ $m=$exPe[$email] } elseif($exPn.ContainsKey($nm)){ $m=$exPn[$nm] }
  if($m){ $d=$m.data; $cur=@(); if($d.tags){$cur=@($d.tags)}; $d.tags=@($cur+$tags|Where-Object{$_}|Select-Object -Unique); $touched[$m.recId]=$d; continue }

  $pk=if($email){"e:"+$email}else{"n:"+$nm}
  if($newByKey.ContainsKey($pk)){ $d=$newByKey[$pk].d; $d.tags=@(@($d.tags)+$tags|Where-Object{$_}|Select-Object -Unique); continue }

  # new record
  $role=MapRole ([string]$row.'Job title'); $roleOther=if($role -eq 'otro'){([string]$row.'Job title').Trim()}else{''}
  $org=(([string]$row.Organization) -replace '\s+',' ').Trim()
  $phone=CleanPhone $row.Phone
  $addr=((([string]$row.Address1).Trim()+' '+([string]$row.Address2).Trim())).Trim()
  $zip=Norm5 $row.'Postal code'; $city=([string]$row.City).Trim(); $state=([string]$row.State).Trim(); $county=''; $country=([string]$row.Country).Trim(); $lat=0;$lng=0
  if($zip -and $zipMap.ContainsKey($zip)){ $g=$zipMap[$zip]; if(-not $city){$city=$g.city}; if(-not $state){$state=$g.state}; $county=$g.county; if(-not $country){$country=$g.country}; $lat=$g.lat;$lng=$g.lng }
  $lastC=''; if(([string]$row.'Created at') -match '^(\d{4}-\d{2}-\d{2})'){$lastC=$matches[1]}
  $status=if(([string]$row.Suppressed) -match '(?i)true'){'inactivo'}else{'activo'}
  $gi++; $gid="gd"+("{0:D5}" -f $gi)
  $d=@{ id=$gid; first=$first; last=$last; role=$role; roleOther=$roleOther; email=$email; phone=$phone; phones=@(); emails=@();
    address=$addr; zip=$zip; city=$city; state=$state; county=$county; country=$country; lat=$lat; lng=$lng; website=""; social=@{ig="";fb="";tiktok="";x=""};
    entities=@(); tags=$tags; language="es"; status=$status; stage=$status; birthday=""; lastContact=$lastC; color="#2F6BFF"; org=$org }
  $newByKey[$pk]=@{ d=$d }
}
"--- nuevos=$($newByKey.Count) | existentes a etiquetar=$($touched.Count) | sin datos=$skip ---"
if($env:DRYRUN -eq "1"){
  "MUESTRA nuevos:"; ($newByKey.Values|Select-Object -First 6)|ForEach-Object{ $d=$_.d; "  [$($d.id)] $($d.first) $($d.last) | $($d.email) | $($d.city),$($d.state) $($d.country) | tags=$(@($d.tags) -join ' / ')" }
  return
}
# create new
$newList=New-Object System.Collections.Generic.List[object]
foreach($o in $newByKey.Values){ $d=$o.d; $newList.Add(@{ fields=@{ "CRM_ID"=$d.id;"Nombre"=$d.first;"Apellido"=$d.last;"Nombre completo"=("$($d.first) $($d.last)").Trim();"Cargo"=$d.role;"Email"=$d.email;"$F_TEL"=$d.phone;"ZIP"=$d.zip;"Ciudad"=$d.city;"Estado/Provincia"=$d.state;"$F_PAIS"=$d.country;"Etiquetas"=(@($d.tags) -join ", ");"Entidades"=$d.org;"_data"=($d|ConvertTo-Json -Depth 8 -Compress) } }) }
$nn=0; for($i=0;$i -lt $newList.Count;$i+=10){ $b=$newList[$i..([Math]::Min($i+9,$newList.Count-1))]; $body=@{records=@($b);typecast=$true}|ConvertTo-Json -Depth 9; Invoke-RestMethod -Uri $PT -Headers $hdrJson -Method Post -Body ([System.Text.Encoding]::UTF8.GetBytes($body))|Out-Null; $nn+=$b.Count; if($nn % 500 -eq 0){"  creados $nn"}; Start-Sleep -Milliseconds 205 }
"nuevos creados: $nn"
# patch existing
$patches=New-Object System.Collections.Generic.List[object]
foreach($rid in $touched.Keys){ $d=$touched[$rid]; $patches.Add(@{ id=$rid; fields=@{ "Etiquetas"=(@($d.tags) -join ", ");"_data"=($d|ConvertTo-Json -Depth 8 -Compress) } }) }
$np=0; for($i=0;$i -lt $patches.Count;$i+=10){ $b=$patches[$i..([Math]::Min($i+9,$patches.Count-1))]; $body=@{records=@($b);typecast=$true}|ConvertTo-Json -Depth 9; Invoke-RestMethod -Uri $PT -Headers $hdrJson -Method Patch -Body ([System.Text.Encoding]::UTF8.GetBytes($body))|Out-Null; $np+=$b.Count; if($np % 500 -eq 0){"  etiquetados $np"}; Start-Sleep -Milliseconds 205 }
"existentes etiquetados: $np"; "LISTO."
