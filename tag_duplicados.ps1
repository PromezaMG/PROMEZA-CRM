$ErrorActionPreference = "Stop"
$PAT = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("cGF0bHpxaUJKQjZESmlVMmcuZDI5MTA4YTI4NWNmNDlmNDFkZjFmNzA2OTczNTQ0OTNkMDA2MTYwNjg2MDg2ZDQ1YzFkM2Y2NjhiYWJmZjU0ZQ=="))
$BASE="app0MYHVyhTYFsDqV"; $hdr=@{Authorization="Bearer $PAT"}; $hj=@{Authorization="Bearer $PAT";"Content-Type"="application/json"}
$PT="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("PERSONAS PROMEZA CRM")
$TAG="Revisar duplicado"
function NM($s){ $t=([string]$s).ToLower().Normalize([Text.NormalizationForm]::FormD); $t=$t -replace '\p{Mn}',''; ($t -replace '\s+',' ').Trim() }
function CE($s){ if($s -match '([A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,})'){$matches[1].ToLower()} else {''} }
function PH($s){ ([string]$s) -replace '\D','' }
$CAP=30

$P=New-Object System.Collections.Generic.List[object]; $off=$null
do{ $u="$PT`?pageSize=100&fields%5B%5D=_data"; if($off){$u+="&offset=$off"}; $r=Invoke-RestMethod -Uri $u -Headers $hdr; foreach($rec in $r.records){ $d=$null;try{$d=$rec.fields._data|ConvertFrom-Json}catch{}; if($d -and $d.id){ $P.Add(@{recId=$rec.id;d=$d}) } }; $off=$r.offset } while($off)
"personas: $($P.Count)"
# group by email and phone
$byE=@{}; $byP=@{}
foreach($p in $P){ $e=CE $p.d.email; $ph=PH $p.d.phone
  if($e){ if(-not $byE.ContainsKey($e)){$byE[$e]=New-Object System.Collections.Generic.List[object]}; $byE[$e].Add($p) }
  if($ph.Length -ge 7){ if(-not $byP.ContainsKey($ph)){$byP[$ph]=New-Object System.Collections.Generic.List[object]}; $byP[$ph].Add($p) }
}
# collect recIds that share email or phone with someone (group size 2..CAP)
$dupRec=@{}
foreach($map in @($byE,$byP)){ foreach($k in $map.Keys){ $g=$map[$k]; if($g.Count -lt 2 -or $g.Count -gt $CAP){continue}; foreach($p in $g){ $dupRec[$p.recId]=$p } } }
"personas con duplicado (comparten correo/telefono): $($dupRec.Count)"

# build patches: add TAG if not present
$patch=New-Object System.Collections.Generic.List[object]; $already=0
foreach($rid in $dupRec.Keys){ $p=$dupRec[$rid]; $d=$p.d; $cur=@(); if($d.tags){$cur=@($d.tags)}
  if($cur -contains $TAG){ $already++; continue }
  $d.tags=@($cur+$TAG|Where-Object{$_}|Select-Object -Unique)
  $patch.Add(@{id=$rid;fields=@{"Etiquetas"=(@($d.tags) -join ", ");"_data"=($d|ConvertTo-Json -Depth 8 -Compress)}}) }
"a etiquetar=$($patch.Count) | ya tenian la etiqueta=$already"
if($env:DRYRUN -eq "1"){ "DRYRUN - no se cambio nada."; return }
$n=0; for($i=0;$i -lt $patch.Count;$i+=10){ $b=$patch[$i..([Math]::Min($i+9,$patch.Count-1))]; $body=@{records=@($b);typecast=$true}|ConvertTo-Json -Depth 9; Invoke-RestMethod -Uri $PT -Headers $hj -Method Patch -Body ([System.Text.Encoding]::UTF8.GetBytes($body))|Out-Null; $n+=$b.Count; if($n % 500 -eq 0){"  $n"}; Start-Sleep -Milliseconds 205 }
"etiquetados con '$TAG': $n. LISTO."