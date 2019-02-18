# https://practical365.com/clients/mobile-devices/outlook-for-ios-android-still-able-to-connect-after-disabling-activesync/

param(
    #[string[]] $UserEmail
)


$UserEmail = @( 
    "khanna@marketappraisals.com",
    "khanna@directorsmortgage.net",
    "khanna@usadirectfunding.com"
)
$UserCredential = Get-Credential 

$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/powershell-liveid/ -Credential $UserCredential -Authentication Basic -AllowRedirection -AllowClobber

Import-PSSession $Session

foreach ( $item in $UserEmail){
    Set-CASMailbox -Identity $item `
        -EwsBlockList @{Add="Outlook-iOS/*","Outlook-Android/*"}

    Get-CASMailbox -Identity $item | Select *EWS*
}

Remove-PSSession $Session