
param(
    [string] $SmtpServer,
    [int] $SmtpPort,
    [string] $UserName,
    [string] $Password,
    [string] $From,
    [string[]] $To,
    [string] $Subject,
    [string] $Body
)



Send-MailMessage -To $To `
    -From $From `
    -Subject $Subject `
    -Body $Body `
    -SmtpServer $SmtpServer `
    -Port $SmtpPort `
