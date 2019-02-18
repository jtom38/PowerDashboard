
param(
    [string] $GlobalAdminUserName,
    [string] $GlobalAdminPassword,
    [string] $UserEmail,
    [string] $ExternalMessage,
    [string] $InternalMessage
)

. .\scripts\Modules\Chainsaw\ChainsawClasses.ps1 -Force

$Logger = [Chainsaw]::new()
$Logger.ConsoleConfig = [ChainsawConsole]::new("#DateTime#, #Level#, #Message#", @("Information", "Warning", "Error", "Debug"))
$Logger.CsvConfig = [ChainsawCsv]::new(".\scripts\Enable-OutOfOffice.csv", "#DateTime#, #Level#, #Message#", @("Information", "Warning", "Error", "Debug"))


$sec = $GlobalAdminPassword | ConvertTo-SecureString -asPlainText -Force
$O365Creds = [pscredential]::new($GlobalAdminUserName, $sec)

$Session = New-PSSession -ConfigurationName Microsoft.Exchange `
    -ConnectionUri https://outlook.office365.com/powershell-liveid/ `
    -Credential $O365Creds `
    -Authentication Basic `
    -AllowRedirection

# Import the session 
Import-PSSession $Session -DisableNameChecking | Out-Null

$Logger.Info("Setting values to $($UserEmail)")
$Logger.Info("External Message: $($ExternalMessage)")
$Logger.Info("Internal Message: $($InternalMessage)")

Set-MailboxAutoReplyConfiguration -Identity $UserEmail `
    -AutoReplyState Enabled `
    -ExternalMessage $ExternalMessage `
    -InternalMessage $InternalMessage

# Disconnects
$Logger.Info("Closing the session.")
Remove-PSSession $Session
exit