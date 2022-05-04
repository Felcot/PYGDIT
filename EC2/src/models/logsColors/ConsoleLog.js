const style = require("./Consolelog.config");
const wtabs = (num)=>{
    return num !=0 ?'\t' + wtabs(num-1):'';
}
function ConsoleLogs (styled,name=styled){
    this.name = name===styled ? name : 'DB['+name+'] ';
    this.style = style[styled];
    this.consoleLog= ({msg,tabs = 0,line = undefined,surname = ''}) =>{
        if(msg !== '') console.log(line?'Line['+line+']':''+ wtabs(tabs)+this.style + this.name + (surname ? ' '+ surname:'') +'=> ' + msg + style.reset);
    }
}
const serverLog = new ConsoleLogs('Server').consoleLog;
const succefulLog = new ConsoleLogs('Succeful').consoleLog;
const errorLog = new ConsoleLogs('Error').consoleLog;
const conectedUserLog = new ConsoleLogs('Connect').consoleLog
module.exports = {ConsoleLogs,serverLog,succefulLog,errorLog,conectedUserLog};
