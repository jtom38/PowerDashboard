let sql = require('sqlite3').verbose();
let db = new sql.Database("db.sqlite");

function GenerateTables(){
    RunMigration00();
    //RunMigration01();
}

function RunMigration00(){
    // This handles the first round of table edits
    db.run("CREATE TABLE `logs` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `Task` TEXT, `TaskID` INTEGER )");
    db.run("CREATE TABLE `tasks` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `Name` TEXT, `Status` TEXT, `StartTime` TEXT, `FinishTime` TEXT, `LogData` INTEGER )");
    db.close();
}

function RunMigration01(){

}

module.exports = { GenerateTables }