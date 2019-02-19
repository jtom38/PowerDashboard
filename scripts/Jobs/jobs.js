
/*
This is the file you want to edit if you want to create a job.
Jobs are tasks that will be checked on in the background and run on a schedule.
This is ideal for jobs you want to run say every minute, hour, day, week, month, year.

Notes:
When you write a path you will start at the application root.  Where you see app.js is application root.
*/
var jobs = {
    "Jobs": [
        {
            "Name": "Hello Jobs",
            "ps1Path": "./scripts/HelloWorld.ps1",
            "param": [
                {
                    "Name": "Echo",
                    "ParamType": "string",
                    "Value": "'Hello from Jobs'"
                }
            ],
            "Trigger": {
                "everyMinute": false,
                "everyHour": false,
                "everyDay": false,

            }
        }
    ]
}