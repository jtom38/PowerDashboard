# PowerDashboard

This is not stable yet.  Everything here is subject to change.  

Nodejs web server that will run PowerShell scripts for you.  This was a tool I was building to help support my team with more code first approach in a windows environment.  

## Features

* Web Service to act as a central location to run scripts.
* Enables team members who might not be into scripting to be able to help with running scripts made by the team.
* Central repo of all the scripts that have been made for the team.
* Rest API to allow external services to kick off tasks.

## Requrements

1. Install the current Node LTS version for your OS. [nodejs](https://nodejs.org/en/download/)
2. If you are on Linux or OSX make sure you install PowerShell Core.  Make sure you install a stable build.  6.1 was stable at the time of writing this. [PowerShell Releases](https://github.com/PowerShell/PowerShell/releases)
3. If you are on Windows, you can use the built-in version or Core.

## Install

Download the source.
Extract source to a folder
Open a terminal and navigate to the folder.
run 'npm install'  this will install node modules
run 'npm run SQL' this will generate the DB for you.
run 'npm run sass' this will generate the sites CSS file.
run 'npm run start' to turn on the service.

Once you have everything generated from the scripts you will just need to run npm run start.

## New Scripts

Add your .ps1 file to the scripts folder.  You can place them within folders if you want to keep things clean.
Open scripts.js in a text editor.
Copy the block below and paste it into the file.  Edit the values to conform to your script.

```json
,{
    "Name": "Remove-OutOfOffice",
    "ps1Path": "./scripts/Remove-OutOfOffice.ps1",
    "logPath": "./scripts/Remove-OutOfOffice.log",
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
}
```

* Name: Defines the name of the script
* ps1Path: Defines where to find the script file.
* logPath: Defines where to find the log export. - This is subject to change.
* param: This defines all the script parameters to run the script.  Currently, all parameters that are defined should be filled on the GUI to avoid errors.
* param.Name: Defines the name.  Match the param in the script.
* param.ParamType: Defines what the type is that PS is looking for.
* param.formType: Defines how the GUI will handle that field.
* Description: Gives the GUI something to display about your script.
* Tags: Currently this is a string value.  Working to get this as a searchable value.
* Notes: When someone wants to run this script this will be displayed.