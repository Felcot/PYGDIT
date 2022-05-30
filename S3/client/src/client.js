import WebSocket from "./client/WebSocket";
import Rest from "./client/Rest";
function Client() {
    this.rest = new Rest
    this.ws =  new WebSocket();
    this.equals=({a,b})=>{
        return a===b;
    }
    
    this.login=({userName,userPass})=>{
        this.ws.login({userName:userName,userPass:userPass})
    }

    this.save = (formData)=>{
        this.rest.save(formData);
    }
    
    
    this.init = () =>{
        this.ws.deploy();
        this.rest.deploy();
    }
}
export default Client;