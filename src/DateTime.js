"use strict";

function GetDateTime(){
    let dt = new Date();
    return `${dt.toLocaleDateString()} ${dt.toLocaleTimeString()}`;
}

function GetSqlDateTime(callback){
    let dt = new Date().toISOString().replace();
    callback(null, dt);
}

module.exports = { GetDateTime }