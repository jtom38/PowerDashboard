"use strict";

class Thing{
    constructor(Msg){
        this.Msg = Msg;
        console.log(Msg);
    }

    toString(){
        return this.Msg;
    }
}

module.exports = Thing;