const fs = require('fs');
const Promise = require('bluebird');
let migration00 = require('./migration00');
//let migration01 = require('./migration01');

let sqlite3 = require('sqlite3').verbose();
//let db

class Sqlite {
    constructor(PathDbFile){
        this.db = new sqlite3.Database(PathDbFile, function(err){
            if(err){
                console.error(`Unable to connect to DB. ${err}`);
            } else {
                console.log(`Connected to DB!`);
            }
        });
    }

    run(command){
        return new Promise(function(resolve, reject){
            this.db.run(command, function(err){
                if(err){
                    console.log(`Running sqlite command: ${command}`);
                    console.error(err);
                    reject(err);
                }else{
                    resolve({id: this.lastID });
                }
            });
        });
    }
}
/*
function GenerateTables(){
    
    migration00.init(function(err, res){
        if(err) { console.error(err);}
        if(res==true){
            console.log("Tables are generated.");
            /*
            migration01.init(function(err,res){
                if(err) {console.error(err);}
                if(res==true){

                }
            });
            
        }
    })
}
*/
//GenerateTables();

module.exports = { Sqlite }