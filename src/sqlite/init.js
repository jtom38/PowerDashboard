const fs = require('fs');
let migration00 = require('./migration00');

let sql = require('sqlite3').verbose();
let db = new sql.Database("db.sqlite");

function GenerateTables(){
    
    migration00.init();
}

module.exports = { GenerateTables }