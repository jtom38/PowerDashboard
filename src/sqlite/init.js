let sql = require('sqlite3').verbose();
let db = new sql.Database("db.sqlite");

function GenerateTables(){
    RunMigration00();
    //RunMigration01();
}

function RunMigration00(){
    // This handles the first round of table edits
    db.run("CREATE TABLE `tasks_finished` ( `ID` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `ScriptName` TEXT NOT NULL, `TimeFinished` TEXT )")
    db.run("CREATE TABLE `tasks_pending` ( `ID` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `ScriptName` TEXT NOT NULL, `TimeStarted` TEXT )")
}

function RunMigration01(){

}

function GetData(table){
    
}

module.exports = { GenerateTables, GetData }