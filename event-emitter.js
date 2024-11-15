//7-4 Event driven architecture, create your own events
const EventEmitter = require('node:events');
const myEmitter = new EventEmitter;
//first listener
myEmitter.on('birthday', ()=>{
    console.log(`Happy birthday to you`);
})
//second listener
myEmitter.on('birthday', (gift)=>{
    console.log(`I will send you a ${gift}`);
})

myEmitter.emit('birthday','watch')