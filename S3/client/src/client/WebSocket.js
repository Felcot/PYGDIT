import io from 'socket.io-client';
function WebSocket(){
    this.socket = io.connect('http://localhost:3001');

    /*                  *
     *     SOCKET EMIT  * 
     *                  */
    this.login = ({userName,userPass})=>{
        console.log(`[WebSocket]=> login`)
        this.socket.emit('login',{userName:userName,userPass:userPass});
    }
    this.register = ({userName,userPass}) =>{
        this.socket.emit('register',{userName:userName,userPass:userPass});
    }

    this.savePicture = ({imageToSave}) => {
        this.socket.emit('savePicture',{imageToSave:imageToSave});
    }
    /*                  *
     *     SOCKET ON    * 
     *                  */
    this.deploy = ()=>{
        let cli = this;
        this.socket.on('connect',()=>{
            console.log('Conectado con el servidor de WS')
        });

        this.socket.on('login',(a)=>{
            window.location = '/camera';
        })
        this.socket.on('notLogin',(a)=>{
            window.location = '/login';
        })

        this.socket.on('savePicture',(a)=>{
            window.location = '/camera';
            alert(a.msg);
        });
    }
}

export default WebSocket;