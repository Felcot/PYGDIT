const {Register} = require('./user/Register');
const {Login} = require('./user/Login');
const {mongo} = require('../database/index')
function Modelo(){
    
    this._mongo =  mongo();
    
    /* Control de usuarios */
    this._register =  new Register(this);
    this.register = ({userName,userPass}) =>{
        this._register.register({userName:userName,userPass:userPass});
    }
    this._login =  new Login(this);
    this.login = ({userName,userPass},callback) =>{
        this._login.login({userName:userName,userPass:userPass},callback);
    }
    /* Control de persistencia*/
    this.getPersistence = () =>{
        return this._mongo || mongo();
    }

    this.savePicture = ({imageToSave},callback)=>{
        const fs = require('fs');
        let h64 = 'data:image/jpeg;base64,';
        let base64Data = imageToSave.substring(h64.length);
        
        require("fs").writeFile("./uploads/out.jpg", base64Data, 'base64', function(err) {
            let response =  `${err == null ? 'La imagen se guardo correctamente.':'Ha ocurrido algún error no se guardo la imagen.'}`;
            console.log(`[File Saver] ${response}`)
            callback({msg:response})
        });

    }
}

module.exports.Modelo = Modelo;