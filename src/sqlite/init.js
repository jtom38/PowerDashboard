let sql = require('sqlite3').verbose();
let db = new sql.Database("db.sqlite");

function GenerateTables(){
    
    RunMigration00();
    //RunMigration01();
}

function RunMigration00(){
    // This handles the first round of table edits
    try{
        db.run("CREATE TABLE `logs` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `Task` TEXT, `TaskID` INTEGER )");
    }catch{
        console.log("Table: logs was already made.");
    }
    
    try{
        db.run("CREATE TABLE `tasks` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `Name` TEXT, `Status` TEXT, `StartTime` TEXT, `FinishTime` TEXT, `LogData` INTEGER )");
    }catch{
        console.log("Table: tasks was already made")
    }
    
    db.close();
}

function RunMigration01(){

}

module.exports = { GenerateTables }