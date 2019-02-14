
param (
    [string] $Echo
)

[hashtable] $return
if( [System.String]::IsNullOrEmpty($Echo) -eq $true -or $Echo -eq ""){
    Write-Host "Hello World!"

}
else {
    $return.Echo = $Echo 
    $return | ConvertTo-Json -Compress
}
