
param (
    [string] $Echo
)

[hashtable] $return
if( [System.String]::IsNullOrEmpty($Echo) -eq $true -or $Echo -eq ""){
    Write-Host "Hello World!"
}
else {
    #Write-Host $Echo
    #$return.Echo = $Echo 
    $Echo | ConvertTo-Json -Compress
}
