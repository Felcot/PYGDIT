import WebSocket from "./client/WebSocket";
import Rest from "./client/Rest";
function Client() {
    this.deplayed = false;
    this.emotion = -1;
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
    this.volverCamara = () =>{
        window.location = '/camera';
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
        this.ws.deploy(this);
        this.deplayed=true;
    }
    this.init();
}

const client = () =>{
    if(window.pygtic == undefined){
        window.pygtic = {client: new Client()};
    }
   return window.pygtic.client;
}
export default client;