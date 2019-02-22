"use strict";
class LogsRepo{
    constructor(Sqlite){
        this.SQLite = Sqlite;
    }

    Insert(LogID, Task, Data ){
        let cmd = `INSERT INTO logs (LogsID, Task, Data)
            VALUES (${LogID}, ${Task}, ${Data})`;
        return this.SQLite.run(cmd);
    }

    GetAllByStatus(Status){
        let cmd = `SELECT * FROM logs
            WHERE Status = '${Status}'`;
        return this.SQLite.all(cmd);
    }

    GetAllByName(Name){
        let cmd = `SELECT * From 'logs' WHERE Task = '${Name}'`;
        return this.SQLite.all(cmd);
    }

    GetAllByLogsID(LogsID){
        let cmd = `SELECT * FROM logs
            WHERE LogsID = '${LogsID}'`;
        return this.SQLite.all(cmd);
    }
}

module.exports = LogsRepo;