$ErrorActionPreference = "Stop"
$PAT = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("cGF0bHpxaUJKQjZESmlVMmcuZDI5MTA4YTI4NWNmNDlmNDFkZjFmNzA2OTczNTQ0OTNkMDA2MTYwNjg2MDg2ZDQ1YzFkM2Y2NjhiYWJmZjU0ZQ=="))
$BASE="app0MYHVyhTYFsDqV"; $hdr=@{Authorization="Bearer $PAT"}
$PT="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("PERSONAS PROMEZA CRM")
$ET="https://api.airtable.com/v0/$BASE/"+[System.Uri]::EscapeDataString("ENTIDADES PROMEZA CRM")
function NM($s){ $t=([string]$s).ToLower().Normalize([Text.NormalizationForm]::FormD); $t=$t -replace '\p{Mn}',''; ($t -replace '\s+',' ').Trim() }
function CE($s){ if($s -match '([A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,})'){$matches[1].ToLower()} else {''} }
function LoadAll($url){ $L=New-Object System.Collections.Generic.List[object]; $off=$null
  do{ $u="$url`?pageSize=100&fields%5B%5D=_data"; if($off){$u+="&offset=$off"}; $r=Invoke-RestMethod -Uri $u -Headers $hdr; foreach($rec in $r.records){ $d=$null;try{$d=$rec.fields._data|ConvertFrom-Json}catch{}; if($d -and $d.id){ $L.Add($d) } }; $off=$r.offset } while($off); $L }

"cargando..."; $P=LoadAll $PT; $E=LoadAll $ET
"personas=$($P.Count) entidades=$($E.Count)"
$entByName=@{}; $entByEmail=@{}
foreach($e in $E){ $n=NM $e.name; $em=CE $e.email; if($n -and -not $entByName.ContainsKey($n)){$entByName[$n]=$e}; if($em -and -not $entByEmail.ContainsKey($em)){$entByEmail[$em]=$e} }

# SAFE set = persona whose NAME exactly matches an entity name (the persona IS the media).
$nameMatch=0; $nameAndEmail=0; $emailNameDiff=0; $sample=New-Object System.Collections.Generic.List[string]
foreach($p in $P){
  $pn=NM "$($p.first) $($p.last)"; $pe=CE $p.email
  $mn = if($pn -and $entByName.ContainsKey($pn)){$entByName[$pn]}else{$null}
  $me = if($pe -and $entByEmail.ContainsKey($pe)){$entByEmail[$pe]}else{$null}
  if($mn){ $nameMatch++; $alsoEmail = ($me -and (NM $me.name) -eq $pn); if($alsoEmail){$nameAndEmail++}
    if($sample.Count -lt 15){ $sample.Add("  persona $($p.id) '$($p.first) $($p.last)'  ==  entidad $($mn.id) '$($mn.name)'$(if($alsoEmail){' (+correo)'})") } }
  elseif($me){ $emailNameDiff++ }
}
"--- CONTACTOS cuyo NOMBRE es igual a un MEDIO (el contacto ES el medio -> error seguro) ---"
"  nombre coincide: $nameMatch  (de esos, correo tambien: $nameAndEmail)"
"  (aparte) comparten correo con un medio pero NOMBRE distinto (probable persona real, NO tocar): $emailNameDiff"
"MUESTRA (nombre coincide):"; $sample | ForEach-Object { $_ }