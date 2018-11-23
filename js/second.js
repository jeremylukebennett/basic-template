"use strict";

// Trying to export function


// myRemoteFunction = () => {
//     console.log("are we remote?");
// }


function myRemoteFunction() {
        console.log("are we remote?");
        console.log("testing from second.js");
}

module.exports = {myRemoteFunction};