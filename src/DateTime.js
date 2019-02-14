"use strict";

let dt = new Date();

function GetDateTime(){
    return `${dt.toLocaleDateString()} ${dt.toLocaleTimeString()}`;
}

module.exports = { GetDateTime }
/*
class DateTime {
    constructor() {

    }

    returnDateTime(){
        return `${dt.toLocaleDateString()} ${dt.toLocaleTimeString()}`;
    }
}

module.exports = {DateTime}
*/