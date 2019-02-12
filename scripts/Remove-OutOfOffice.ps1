
Param(
    [string] $GlobalAdminUserName,
    [string] $GlobalAdminPassword,
    [string] $UserEmail
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

Write-host "Out Of Office remove request for: $($UserEmail)"
Set-MailboxAutoReplyConfiguration -Identity $UserEmail `
    -AutoReplyState Disabled

# Disconnects
Remove-PSSession $Session