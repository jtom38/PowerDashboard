
/*
This is the file you want to edit to add a new script into the program.
*/

var scripts = {
    "Scripts": [
        {
            "Name": "HelloWorld",
            "ps1Path": "./scripts/HelloWorld.ps1",
            "param": [
                {
                    "Name": "Echo",
                    "ParamType": "string",
                    "formType": 'text',
                    "formDesc": "Value entered here will be sent to the console."
                }
            ],
            "Returns": {
                "Type": "string || void"
            },
            "Description" : "This is a test script to return the text that is entered.",
            "Tags": "OS, Debug",
            "Notes": [
                "This is a demo script that you can run to test PowerServer.",
                "Once you run the script make sure you check the logs."
            ]
        },
        {
            "Name": "Send-MailMessage",
            "ps1Path": "./scripts/Send-MailMessage.ps1",
            "param": [
                {
                    "Name": "SmtpServer",
                    "ParamType": "string",
                    "formType": 'text'
                },                
                {
                    "Name": "SmtpPort",
                    "ParamType": "int",
                    "formType": 'number'
                },
                {
                    "Name": "UserName",
                    "ParamType": "string",
                    "formType": 'text'
                },
                {
                    "Name": "Password",
                    "ParamType": "string",
                    "formType": 'password'
                },
                {
                    "Name": "From",
                    "ParamType": "string",
                    "formType": 'text'
                },
                {
                    "Name": "To",
                    "ParamType": "string[]",
                    "formType": 'text'
                },
                {
                    "Name": "Subject",
                    "ParamType": "string",
                    "formType": 'text'
                },
                {
                    "Name": "body",
                    "ParamType": "string",
                    "formType": 'text'
                },
                
            ],
            "Description" : "This is a test script to return the text that is entered.",
            "Tags": "SMTP, Email, Debug",
            "Notes": [
                "This is a demo script that will respond back with the data that was entered into -Echo.  If nothing is filled in then it will respond with 'Hello World!'"
            ]
        },
        {
            "Name": "Enable-OutOfOffice",
            "ps1Path": "./scripts/Enable-OutOfOffice.ps1",
            "param": [
                {
                    "Name": "GlobalAdminUserName",
                    "ParamType": "string",
                    "formType": 'text'
                },
                {
                    "Name": "GlobalAdminPassword",
                    "ParamType": "string",
                    "formType": 'password'
                },
                {
                    "Name": "UserEmail",
                    "ParamType": "string",
                    "formType": 'email'
                },
                {
                    "Name": "ExternalMessage",
                    "ParamType": "string",
                    "formType": 'text'
                },
                {
                    "Name": "InternalMessage",
                    "ParamType": "string",
                    "formType": 'text'
                }    
            ],
            "Returns": "bool || void",
            "Description" : "This script lets you as an admin force add a out of office on a user account.",
            "Tags": "OutOfOffice, Email, Office 365",
            "Notes": [
                "All fields are required for this process."
            ]
        },
        {
            "Name": "Remove-OutOfOffice",
            "ps1Path": "./scripts/Remove-OutOfOffice.ps1",
            "param": [
                {
                    "Name": "GlobalAdminUserName",
                    "ParamType": "string",
                    "formType": 'text'
                },
                {
                    "Name": "GlobalAdminPassword",
                    "ParamType": "string",
                    "formType": 'password'
                },
                {
                    "Name": "UserEmail",
                    "ParamType": "string",
                    "formType": 'email'
                } 
            ],
            "Description" : "This script lets you as an admin force remove a out of office on a user account.",
            "Tags": "OutOfOffice, Email, Office 365",
            "Notes": [
                "All fields are required for this process."
            ]
        },
        {
            "Name": "Get-DiskInfo",
            "ps1Path": "./scripts/Get-DiskInfo.ps1",
            "param": [
 
            ],
            "Description" : "This script lets you as an admin force remove a out of office on a user account.",
            "Tags": "OutOfOffice, Email, Office 365",
            "Notes": [
                "All fields are required for this process."
            ]
        }
    ]
};

module.exports = scripts;