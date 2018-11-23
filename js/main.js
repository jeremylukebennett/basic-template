"use strict";

let externalFile = require("./second.js");

externalFile.myRemoteFunction();

console.log("testing from main.js");
console.log("another test....");
