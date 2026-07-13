$ErrorActionPreference = "Stop"
$PAT = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("cGF0bHpxaUJKQjZESmlVMmcuZDI5MTA4YTI4NWNmNDlmNDFkZjFmNzA2OTczNTQ0OTNkMDA2MTYwNjg2MDg2ZDQ1YzFkM2Y2NjhiYWJmZjU0ZQ=="))
$BASE="app0MYHVyhTYFsDqV"; $hdr=@{Authorization="Bearer $PAT"}; $hdrJson=@{Authorization="Bearer $PAT";"Content-Type"="application/json"}
$PT="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("PERSONAS PROMEZA CRM")
$ET="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("ENTIDADES PROMEZA CRM")

function DeleteByPrefix($url,$prefix){
  $ids=New-Object System.Collections.Generic.List[string]; $off=$null
  $ff=[System.Uri]::EscapeDataString("LEFT({CRM_ID},$($prefix.Length))=""$prefix""")
  do{ $u="$url`?pageSize=100&filterByFormula=$ff&fields%5B%5D=CRM_ID"; if($off){$u+="&offset=$off"}; $r=Invoke-RestMethod -Uri $u -Headers $hdr; foreach($rec in $r.records){ $ids.Add($rec.id) }; $off=$r.offset } while($off)
  "  encontrados $prefix : $($ids.Count)"
  if($env:DRYRUN -eq "1"){ return $ids.Count }
  $n=0; for($i=0;$i -lt $ids.Count;$i+=10){ $b=$ids[$i..([Math]::Min($i+9,$ids.Count-1))]; $qs=($b|ForEach-Object{"records[]=$_"}) -join '&'; Invoke-RestMethod -Uri "$url`?$qs" -Headers $hdr -Method Delete|Out-Null; $n+=$b.Count; Start-Sleep -Milliseconds 210 }
  "  borrados $prefix : $n"; return $n
}

"== borrar personas mcc =="; DeleteByPrefix $PT "mcc" | Out-Null
"== borrar entidades mce =="; DeleteByPrefix $ET "mce" | Out-Null

# clean stale mce* entity links left on any pre-existing persona (from run 1's linking)
"== limpiar enlaces mce* en personas existentes =="
$dirty=New-Object System.Collections.Generic.List[object]; $off=$null
do{ $u="$PT`?pageSize=100&fields%5B%5D=_data"; if($off){$u+="&offset=$off"}; $r=Invoke-RestMethod -Uri $u -Headers $hdr
  foreach($rec in $r.records){ $d=$null;try{$d=$rec.fields._data|ConvertFrom-Json}catch{}; if(-not $d){continue}
    if($d.entities -and (@($d.entities)|Where-Object{$_.id -like 'mce*'})){ $keep=@(@($d.entities)|Where-Object{$_.id -notlike 'mce*'}); $d.entities=$keep; $en=(@($keep)|ForEach-Object{$_.name}) -join ", "; $dirty.Add(@{id=$rec.id;fields=@{"Entidades"=$en;"_data"=($d|ConvertTo-Json -Depth 8 -Compress)}}) } }
  $off=$r.offset } while($off)
"  personas con enlace mce* a limpiar: $($dirty.Count)"
if($env:DRYRUN -ne "1"){ $n=0; for($i=0;$i -lt $dirty.Count;$i+=10){ $b=$dirty[$i..([Math]::Min($i+9,$dirty.Count-1))]; $body=@{records=@($b)}|ConvertTo-Json -Depth 9; Invoke-RestMethod -Uri $PT -Headers $hdrJson -Method Patch -Body ([System.Text.Encoding]::UTF8.GetBytes($body))|Out-Null; $n+=$b.Count; Start-Sleep -Milliseconds 210 }; "  limpiadas: $n" }
"UNDO LISTO."
