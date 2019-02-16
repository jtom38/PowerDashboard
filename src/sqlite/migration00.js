let sql = require('sqlite3').verbose();
let db = new sql.Database("db.sqlite");
let Promise = require('process');

function RunMigration00(Callback){

    let p = new Promise( (resolve, reject) => {
        EditLogs()
    })

    // This handles the first round of table edits
    EditLogs()
        .then(
            console.log('Table was updated.')
        )
        .then(
            EditTasks()
        )
}

function EditLogs(){
    return new Promise(function(fulfilled, rejected){
        try{
            let cmd = "CREATE TABLE 'logs' ( `ID` TEXT NOT NULL, `Task` TEXT, `TaskID` TEXT, `Data` TEXT )";
            db.run(cmd, function (err) {
                if(err) { return rejected; }
                return fulfilled;
            });
        }catch{
            console.log("Table: logs was already made.");
            return rejected;
        }
    });
}

function EditTasks(){
    return new Promise(function(fulfilled, rejected){
        try{
            let cmd = "CREATE TABLE 'tasks' ( `ID` TEXT NOT NULL, `Name` TEXT, `Status` TEXT, `StartTime` TEXT, `FinishTime` TEXT, `LogID` TEXT, PRIMARY KEY(`ID`) )";
            db.run(cmd, function (err) {
                if(err){ return rejected; }
                return fulfilled;
            });
        }catch{
            console.log("Table: tasks was already made")
            return rejected;
        }
        db.close();
    });
}

module.exports = RunMigration00;