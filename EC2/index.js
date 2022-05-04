const express = require('express');
const app = express();
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');
const {serverLog,conectedUserLog} = require('./src/models/logsColors/ConsoleLog');

app.use(cors());

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin:'http://localhost:3000',
        methods: ['GET','POST'],
    },
});


io.on('connection',(socket)=>{
    conectedUserLog({msg:socket.id,surname:'UserLog'})
});

server.listen(3001,()=>{
    serverLog({msg:'< Server is Running >'});
})