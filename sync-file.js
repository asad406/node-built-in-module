const fs = require("fs");
//reading a file text
const readText = fs.readFileSync('./texts/read.txt','utf-8');
console.log(readText);

//writing a file text
const writingText = fs.writeFileSync('./texts/wirte.txt', readText+ 'this is my writing text')
console.log(writingText);