const {databaseLog} = require('../logsColors/DatabaseLogs')
function Login (modelo){
    this.modelo = modelo;
    

    this.login = ({userName,userPass},callback)=>{
        this.modelo.getPersistence().select('Users',{name:userName,pass:userPass},(result)=>{

            if(result){
                databaseLog({msg:`[Login] => Login realizado.`,state:'Succeful'});
                
            }else{
                databaseLog({msg:`[Login] => Login no realizado. Alguno de los datos es incorrecto`,state:'Error'});
            }
            callback(result?true:false);
        })
        
    }
}module.exports.Login = Login;