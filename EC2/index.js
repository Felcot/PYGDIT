const express = require('express');
const app = express();

const cors = require('cors');
const {serverLog,conectedUserLog} = require('./src/models/logsColors/ConsoleLog');

app.use(cors());

const webSocket = new (require('./src/server/WebSocket'))();
if(webSocket) console.log('El servidor se consiguio lanzar.')

