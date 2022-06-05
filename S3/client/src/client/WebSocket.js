import io from 'socket.io-client';
import client from '../client';
function WebSocket(){
    this.socket = io.connect('http://localhost:3001');
    this.clt = undefined;
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
    this.deploy = (clt)=>{
        let cli = this;
        cli.clt = clt;
        
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
            if(!a.ok){
                window.location = '/camera';
                alert(a.msg);
            }else{
                window.location = '/gatito';
            }
            
        });
    }
}

export default WebSocket;