const {ConsoleLogs} = require('./ConsoleLog');
const style = require('./Consolelog.config');
const { name }= require('../../database/mongo.config')
module.exports = {
     databaseLog : ({msg,tabs = 0,line = undefined,surname = '',state}) =>{
        const dbLog = new ConsoleLogs('Database',name);
        
        msg = state == 'Succeful' ? style.Succeful + msg : msg;
        msg = state == 'Error' ? style.Error + msg : msg;
        msg = state == 'Loading' ? style.Loading + msg : msg;
        msg = state == 'Neutral' ? style.Neutral + msg : msg;
        
        dbLog.consoleLog({msg,tabs : tabs,line : line,surname : surname});
        
    }
}