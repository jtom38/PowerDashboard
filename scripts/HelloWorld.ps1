
param (
    [string] $Echo
)

if( [System.String]::IsNullOrEmpty($Echo) -eq $true -or $Echo -eq ""){
    Write-Host "Hello World!"
    $Echo = "Hello World!"
    $json = $Echo | ConvertTo-Json -Compress
    Write-Host $json
}
else {
    #Write-Host $Echo
    #$return.Echo = $Echo 
    $json = $Echo | ConvertTo-Json -Compress
    write-host $json
}
