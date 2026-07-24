$ErrorActionPreference = "Stop"
$PAT = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("cGF0bHpxaUJKQjZESmlVMmcuZDI5MTA4YTI4NWNmNDlmNDFkZjFmNzA2OTczNTQ0OTNkMDA2MTYwNjg2MDg2ZDQ1YzFkM2Y2NjhiYWJmZjU0ZQ=="))
$BASE="app0MYHVyhTYFsDqV"; $hdr=@{Authorization="Bearer $PAT"}; $hj=@{Authorization="Bearer $PAT";"Content-Type"="application/json"}
$PT="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("PERSONAS PROMEZA CRM")
$ET="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("ENTIDADES PROMEZA CRM")
$F_TEL="Tel"+[char]0xE9+"fono"
$inv=[Globalization.CultureInfo]::InvariantCulture

function RealFromPhones($d){ foreach($ph in @($d.phones)){ $v=([string]$ph.value); if($v -and ($v -replace '\D','').Length -ge 7 -and $v -notmatch '[eE]'){ return ($v -replace '\D','') } } return '' }
function SciToInt($s){ try { $dbl=[double]::Parse([string]$s,$inv); if($dbl -gt 0 -and $dbl -lt 1e15){ return ([long]$dbl).ToString() } } catch {} return '' }

function FixTable($url,$label){
  $recs=New-Object System.Collections.Generic.List[object]; $off=$null
  do{ $u="$url`?pageSize=100&fields%5B%5D=_data"; if($off){$u+="&offset=$off"}; $r=Invoke-RestMethod -Uri $u -Headers $hdr; foreach($x in $r.records){ $recs.Add($x) }; $off=$r.offset } while($off)
  $patch=New-Object System.Collections.Generic.List[object]; $usedReal=0; $converted=0; $skipped=0
  foreach($x in $recs){ $d=$null;try{$d=$x.fields._data|ConvertFrom-Json}catch{}; if(-not $d){continue}
    if(([string]$d.phone) -notmatch '[eE]\+?\d'){continue}
    $real=RealFromPhones $d
    $new=''
    if($real){ $new=$real; $usedReal++ } else { $new=SciToInt $d.phone; if($new){$converted++} }
    if(-not $new){ $skipped++; continue }
    $d | Add-Member phone $new -Force
    # keep phones[] consistent (set if empty)
    if(-not (@($d.phones)|Where-Object{$_.value})){ $d | Add-Member phones @(@{value=$new;label="Personal"}) -Force }
    $patch.Add(@{id=$x.id; fields=@{"$F_TEL"=$new; "_data"=($d|ConvertTo-Json -Depth 8 -Compress)}})
  }
  "$label`: a corregir=$($patch.Count) (de phones[]=$usedReal, convertidos=$converted, sin arreglo=$skipped)"
  if($env:DRYRUN -eq "1"){ "  MUESTRA:"; ($patch|Select-Object -First 6)|ForEach-Object{ "    $($_.fields.$F_TEL)" }; return }
  $n=0; for($i=0;$i -lt $patch.Count;$i+=10){ $b=$patch[$i..([Math]::Min($i+9,$patch.Count-1))]; $body=@{records=@($b);typecast=$true}|ConvertTo-Json -Depth 9; Invoke-RestMethod -Uri $url -Headers $hj -Method Patch -Body ([System.Text.Encoding]::UTF8.GetBytes($body))|Out-Null; $n+=$b.Count; Start-Sleep -Milliseconds 205 }
  "$label`: corregidos=$n"
}
FixTable $PT "PERSONAS"
FixTable $ET "ENTIDADES"
"LISTO."