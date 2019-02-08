
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
        }
    ]
};

module.exports = scripts;