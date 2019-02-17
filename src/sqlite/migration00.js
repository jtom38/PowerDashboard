let sql = require('sqlite3').verbose();
let db = new sql.Database("db.sqlite")
let Promise = require('promise');

function init(callback){

    EditLogs(function(err, res){
        if(err ) { console.error(err); }
        if (res == true) {
            console.log("tbl.Logs was updated");
        }
    });

    EditTasks(function(err,res){
        if(err) { console.error(err); }
        if (res == true) {
            console.log("tbl.Tasks was updated");
        }
    });

}

function EditLogs(callback){
    let cmd = "CREATE TABLE 'logs' ( `ID` TEXT NOT NULL, `Task` TEXT, `TaskID` TEXT, `Data` TEXT )";
    db.run(cmd, function (err, result) {
        if(err) { return callback(err) }
        return callback(null, true);
    });
}

function EditTasks(callback){
    let cmd = "CREATE TABLE 'tasks' ( `ID` TEXT NOT NULL, `Name` TEXT, `Status` TEXT, `StartTime` TEXT, `FinishTime` TEXT, `LogID` TEXT, PRIMARY KEY(`ID`) )";
    db.run(cmd, function (err, result) {
        if(err){ return callback(err); }
        
        return callback(null,true);
    });   
}

module.exports = { init, EditLogs, EditTasks }