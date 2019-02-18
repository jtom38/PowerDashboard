
param (
    [string] $Echo
)

. .\Modules\Chainsaw\ChainsawClasses.ps1 -Force
$Logger = [Chainsaw]::new()
$Logger.ConsoleConfig = [ChainsawConsole]::new("#DateTime#, #Level#, #Message#", @("Information", "Warning", "Error", "Debug"))
$Logger.CsvConfig = [ChainsawCsv]::new(".\HelloWorld.csv", "#DateTime#, #Level#, #Message#", @("Information", "Warning", "Error", "Debug"))

$Logger.Info("Script has started.")
if( [System.String]::IsNullOrEmpty($Echo) -eq $true -or $Echo -eq ""){
    $Logger.Info("Hello World!")
    #$Echo = "Hello World!"
    #$json = $Echo | ConvertTo-Json -Compress
    #Write-Host $json
}
else {
    $Logger.Info($Echo)
    #$return.Echo = $Echo 
    #$json = $Echo | ConvertTo-Json -Compress
    #write-host $json
}

$Logger.Info("Script has finished")
exit