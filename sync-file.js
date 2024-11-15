const fs = require("fs");
//reading a file text
const readText = fs.readFileSync('./texts/read.txt');
console.log(readText);