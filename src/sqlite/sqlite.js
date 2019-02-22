"use strict";

const fs = require('fs');
const Promise = require('bluebird');
let sqlite3 = require('sqlite3').verbose();

class SQLite {
    constructor(PathDbFile){
        this.Connection = new sqlite3.Database(PathDbFile, (err) => {
            if(err){
                console.error(`Unable to connect to DB. ${err}`);
            } else {
                console.log(`Connected to DB!`);
            }
        });
    }

    // This is used to run CREATE, ALTER, and DELETE commands.
    run(command){
        return new Promise((resolve, reject) => {
            this.Connection.run(command, (err) => {
                if(err){
                    console.log(`Running sqlite command: ${command}`);
                    console.error(err);
                    reject(err);
                }else{
                    resolve({ id: this.lastID });
                }
            });
        });
    }

    // This returns a Select with a single row
    get(command, params = []){
        return new Promise((resolve, reject) =>{
            this.Connection.get(command, params, (err, result) => {
               if(err) {
                   console.log(`Error running SQLite command: ${command}`);
                   console.error(err);
                   reject(err);
               } else {
                    resolve(result);
               }
            });
        });
    }

    // This returns a Select with multiple rows
    all(command, params = []){
        return new Promise((resolve, reject) => {
            this.Connection.all(command, params, (err, rows) => {
               if(err){
                   console.log(`Error Running SQLite command: ${command}`);
                   console.error(err);
                   reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
}

module.exports = SQLite;