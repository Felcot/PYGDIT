const {serverLog,conectedUserLog} = require('../models/logsColors/ConsoleLog')
function WebSocket(app){
    const http = require('http');
    const {Server} = require('socket.io');
    const server = http.createServer(app);
    const {Modelo} = require('../models/Modelo');
    const modelo = new Modelo();
    const io = new Server(server,{
        cors: {
            origin:'http://localhost:3000',
            methods: ['GET','POST'],
        },
    });

    this.toSender=function(socket,channel,data){
        socket.emit(channel,data);
    }
	this.broadcastGroup=function(io,habitacion,channel,data){
        io.sockets.in(habitacion).emit(channel,data);
    }
    this.broadcastGroupLeastSender=function(socket,group,channel,data){
        socket.broadcast.to(group).emit(channel,data)
    }
    this.broadcast= function(socket,channel,data){
    	socket.broadcast.emit(channel,data);
    }

    io.on('connection',(socket)=>{
        conectedUserLog({msg:socket.id,surname:'UserLog'})

        socket.on('register',({userName,userPass})=>{
            serverLog({msg:'Intendando registrarse...'})
            modelo.register({userName:userName,userPass:userPass});
        })
        socket.on('login',({userName,userPass})=>{
            serverLog({msg:'Intendando iniciar sesión...'})
            modelo.login({userName:userName,userPass:userPass},(correct) =>{
                this.toSender(socket,(correct ?'login':'notLogin'),correct);
            })
        })
    });

    server.listen(3001,()=>{
        serverLog({msg:'< Server is Running >'});
    })
}

module.exports.WebSocket = WebSocket;