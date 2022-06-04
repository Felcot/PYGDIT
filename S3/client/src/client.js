import WebSocket from "./client/WebSocket";
import Rest from "./client/Rest";
function Client() {
    this.deplayed = false;
    this.say = (msg) =>{
       
        console.log(msg)
    }
    this.rest = new Rest
    this.ws =  new WebSocket();
    this.equals=({a,b})=>{
        return a===b;
    }
    
    this.login=({userName,userPass})=>{
        console.log(`[client]=> login`)
        this.ws.login({userName:userName,userPass:userPass})
    }
    
    this.register = ({userName,userPass}) =>{
        this.ws.register({userName:userName,userPass:userPass});
    }

    this.save = (formData)=>{
        this.rest.save(formData);
    }
    this.savePicture = ({imageToSave})=>{
        this.ws.savePicture({imageToSave:imageToSave});
    }
    
    this.init = () =>{
        if(this.deplayed) return;
        this.ws.deploy();
        this.deplayed=true;
    }
    this.init();
}

const client = () =>{
    if(!window.pygtic)
        window.pygtic = {client: new Client()};
   return window.pygtic.client = window.pygtic.client || new Client();
}
export default client;