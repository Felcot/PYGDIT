import io from 'socket.io-client';
function WebSocket(){
    this.socket = io.connect('http://localhost:3001');

    /*                  *
     *     SOCKET EMIT  * 
     *                  */
    this.login = ({userName,userPass})=>{
        this.socket.emit('login',{userName:userName,userPass:userPass});
    }
    this.register = ({userName,userPass}) =>{
        this.socket.emit('register',{userName:userName,userPass:userPass});

    }
    /*                  *
     *     SOCKET ON    * 
     *                  */
    this.deploy = ()=>{
        let cli = this;
        this.socket.on('connect',()=>{
            console.log('Conectado con el servidor de WS')
        });
    }
}

export default WebSocket;