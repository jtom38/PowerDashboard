var Promise = require('bluebird');
var SQLite = require('./sqlite/SQLite');
var TasksRepo = require('./sqlite/TasksRepo');
var LogsRepo = require('./sqlite/LogsRepo');

let sqlite = new SQLite('./db.sqlite');
let tasksTable = new TasksRepo(sqlite);
let logsTable = new LogsRepo(sqlite);

/*
This is the root file that handles the job execuition.

All jobs will be handled in the background
*/
class Jobs{
    constructor(SQLiteClass, JobsJSON){

    }

    async Watcher(){
        let LoopActive = true;
        while(LoopActive == true){

            //check SQL for pending jobs
            let pendingJobs = await tasksTable.GetAllStatus('Pending');

            pendingJobs.forEach(element => {
                
            });

        }
    }

    
}

function CheckForJobs(){
    let NeverClose = true
    while(NeverClose == true) {

        // Check SQL for pending jobs that need to run

    }
}