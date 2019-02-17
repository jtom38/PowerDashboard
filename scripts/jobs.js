
/*
This is the file you want to edit if you want to create a job.
Jobs are tasks that will be checked on in the background and run on a schedule.
This is ideal for jobs you want to run say every minute, hour, day, week, month, year.
*/
var jobs = {
    "Jobs": [
        {
            "Name": "Hello Jobs",
            "ps1Path": "./scripts/HelloWorld.ps1",
            "logPath": "./scripts/HelloWorld.log",
            "param": [
                {
                    "Name": "Echo",
                    "ParamType": "string",
                    "Value": "'Hello Jobs'"
                }
            ],
            "Trigger": {
                
            }
        }
    ]
}