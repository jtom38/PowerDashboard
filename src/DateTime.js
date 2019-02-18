"use strict";

function GetDateTime(){
    let dt = new Date();
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