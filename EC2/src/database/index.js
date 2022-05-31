const Mongo = require('./mongo')
const { databaseLog } = require('../models/logsColors/DatabaseLogs');

var mongoClient = undefined;

const createAndConnect = ()=>{
      mongoClient = new Mongo();
      console.log()
      databaseLog({msg:'Iniciando mongo...',state:'Loading'})
      mongoClient.connect((db)=>{
            databaseLog({msg:'Conectado a Atlas',state:'Succeful'})
      });
      return mongoClient;
}

const mongo = () => {

      return(
            mongoClient || createAndConnect()
      );      

}

module.exports.mongo = mongo;