const {databaseLog} = require('../logsColors/DatabaseLogs')
function Register (modelo){
    this.modelo = modelo;
    

    this.register = ({userName,userPass})=>{
        this.modelo.getPersistence().select('Users',{name:userName},(result)=>{
            if(!result){
                this.modelo.getPersistence().insert('Users',{name:userName,pass:userPass},(result)=>{
                    databaseLog({msg:`[user-Register] Registro realizado ${result?'con':'sin'} exito.`,state:(result?'Succeful':'Error')});
                });
            }else{
                databaseLog({msg:`[Register] => Registro realizado sin exito. - El usuario ya existe`,state:'Error'});
            }
        })
        
    }
}

module.exports.Register = Register;