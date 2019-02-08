
var scripts = {
    "Scripts": [
        {
            "Name": "HelloWorld",
            "ps1Path": "./scripts/HelloWorld/HelloWorld.ps1",
            "logPath": "./scripts/HelloWorld/HelloWorld.log",
            "param": [
                {
                    "Name": "Echo",
                    "ParamType": "string",
                    "formType": 'text'
                }
            ],
            "Description" : "This is a test script to return the text that is entered.",
            "Tags": "OS, Debug",
            "Notes": "This is a demo script that will respond back with the data that was entered into -Echo.  If nothing is filled in then it will respond with 'Hello World!'"
        },
        {
            "Name": "SendEmail",
            "ps1Path": "./scripts/SendEmail/SendEmail.ps1",
            "logPath": "./scripts/SendEmail/SendEmail.log",
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
            "Notes": "This is a demo script that will respond back with the data that was entered into -Echo.  If nothing is filled in then it will respond with 'Hello World!'"
        }
    ]
};

module.exports = scripts;