const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

const {WebSocket} = require('./src/server/WebSocket');
const webSocket = new WebSocket();

