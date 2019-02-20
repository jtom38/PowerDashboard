
param(
    #[string] $SmtpServer,
    #[int] $SmtpPort,
    [string] $UserName,
    [string] $Password,
    [string] $From,
    [string[]] $To,
    [string] $Subject,
    [string] $Body
)

$SmtpServer = "smtp.office365.com"
$SmtpPort = 587

$sec = $Password | ConvertTo-SecureString -asPlainText -Force
$Creds = [pscredential]::new($UserName, $sec)


Send-MailMessage -To $To `
    -From $From `
    -Subject $Subject `
    -Body $Body `
    -SmtpServer $SmtpServer `
    -Port $SmtpPort `
    -Credential $Creds
