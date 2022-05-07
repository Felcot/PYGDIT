import io from 'socket.io-client';
function Client() {

    this.socket = io.connect('http://54.226.225.169:3001');
    this.equals=({a,b})=>{
        return a===b;
    }
    /*                  *
     *     SOCKET EMIT  * 
     *                  */
    this.login=({userName,userPass})=>{
        console.log({userName,userPass});
    }

    this.sended =(value)=>{
        this.socket.emit('sended',{message:value});
    }
    /*                  *
     *     SOCKET ON    * 
     *                  */
    this.recived = (value)=>{
        this.socket.on('recived',value);
    }

}
export default Client;