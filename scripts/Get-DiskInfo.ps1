

Enter-PSSession -ComputerName 'dm-esb01'

$info = [System.IO.DriveInfo]::GetDrives()
$json = $info | ConvertTo-Json -Compress
write-host $json
Exit-PSSession