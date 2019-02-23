let sql = require('sqlite3').verbose();
let db = new sql.Database("db.sqlite")
let Promise = require('promise');

class Migration00{
    constructor(CLassSqlite){
        this.sqlite = CLassSqlite;
    }

    CreateLogs(){
        let cmd = `
            CREATE TABLE IF NOT EXISTS 'logs' (
                'LogsID' TEXT NOT NULL, 
                'Task' TEXT, 
                'Data' TEXT, 
                PRIMARY KEY('LogsID') 
            )`;
        this.sqlite.run(cmd)
    }

    CreateTasks(){
        let cmd = `CREATE TABLE IF NOT EXISTS 'tasks' (
            'TasksID' TEXT NOT NULL, 
            'Name' TEXT, 
            'Status' TEXT,
            'StartTime' TEXT, 
            'FinishTime' TEXT, 
            'Source' TEXT, 
            PRIMARY KEY('TasksID')
            )`;
        this.sqlite.run(cmd);
    }
}


function init(callback){

    EditLogs(function(err, res){
        if(err ) { console.error(err); }
        if (res == true) {
            console.log("tbl.Logs was updated");

            EditTasks(function(err,res){
                if(err) { console.error(err); }
                if (res == true) {
                    console.log("tbl.Tasks was updated");

                    callback(null, true);
                }
            });
        }
    });
}

function EditLogs(callback){
    let cmd = "CREATE TABLE 'logs' ('LogsID' TEXT NOT NULL, 'Task' TEXT, 'Data' TEXT, PRIMARY KEY('LogsID') )";
    db.run(cmd, function (err, result) {
        if(err) { return callback(err) }
        return callback(null, true);
    });
}

function EditTasks(callback){
    let cmd = "CREATE TABLE 'tasks' ('TasksID' TEXT NOT NULL,'Name' TEXT, 'Status' TEXT,'StartTime' TEXT, 'FinishTime' TEXT, 'Source' TEXT, 'Param' TEXT, PRIMARY KEY('TasksID'))";
    db.run(cmd, function (err, result) {
        if(err){ return callback(err); }
        
        return callback(null,true);
    });   
}

module.exports = { init, EditLogs, EditTasks }