

$info = [System.IO.DriveInfo]::GetDrives()
$json = $info | ConvertTo-Json -Compress
write-host $json