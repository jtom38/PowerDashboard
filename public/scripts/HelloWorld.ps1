
param (
    [string] $Echo
)

if( [System.String]::IsNullOrEmpty($Echo) -eq $true){
    Write-Host "Hello World!"
}
else {
    Write-Host $Echo
}
