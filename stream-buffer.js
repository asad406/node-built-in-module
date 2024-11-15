const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');
//creating a server using raw node.js
const server = http.createServer()
//listener
server.on('request', (req,res)=>{
    console.log(req.url, req.method);
    if(req.url === '/read-file' && req.method === 'GET');
        //streaming file reading
        const readAbleStream = fs.createReadStream(process.cwd() + '/texts/read.txt')
        readAbleStream.on('data', (buffer)=>{
            res.statusCode = 200;
            res.write(buffer)
        })
        readAbleStream.on('end', ()=> {
            res.statusCode = 200;
            res.end('The streaming is over');
        })
        readAbleStream.on('error', (error)=> {
            res.statusCode = 400;
            console.log(error);
            res.end('Something went wrong ');

        })
})

server.listen(5000, ()=>{
    console.log(`Server is listening on port 5000`);
})