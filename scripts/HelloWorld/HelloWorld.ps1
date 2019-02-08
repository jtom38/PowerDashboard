
param (
    [string] $Echo
)

if( [System.String]::IsNullOrEmpty($Echo) -eq $true -or $Echo -eq ""){
    Write-Host "Hello World!"
    Write-Host "Hello World!"
    Write-Host "Hello World!"
    Write-Host "Hello World!"
}
else {
    Write-Host $Echo
}
