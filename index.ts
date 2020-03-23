#!/usr/bin/env ts-node


var args = process.argv.splice(process.execArgv.length + 2);

// Retrieve the first argument
var name = args[0];

console.log("Name: ", name);

