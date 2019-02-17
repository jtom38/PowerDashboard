
param(
    [string] $GlobalAdminUserName,
    [string] $GlobalAdminPassword,
    [string] $UserEmail,
    [string] $ExternalMessage,
    [string] $InternalMessage
)

$sec = $GlobalAdminPassword | ConvertTo-SecureString -asPlainText -Force
$O365Creds = [pscredential]::new($GlobalAdminUserName, $sec)

$Session = New-PSSession -ConfigurationName Microsoft.Exchange `
    -ConnectionUri https://outlook.office365.com/powershell-liveid/ `
    -Credential $O365Creds `
    -Authentication Basic `
    -AllowRedirection

# Import the session 
Import-PSSession $Session -DisableNameChecking

Write-Host "Setting values to $($UserEmail)"
Write-Host "External Message: $($ExternalMessage)"
Write-Host "Internal Message: $($InternalMessage)"

Set-MailboxAutoReplyConfiguration -Identity $UserEmail `
    -AutoReplyState Enabled `
    -ExternalMessage $ExternalMessage `
    -InternalMessage $InternalMessage

# Disconnects
Write-Host "Closing the session."
Remove-PSSession $Session
exit