// main file
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoDB = require('./src/config/database');
const Api = require('./src/routers/index');
require('dotenv').config()
// const {attachWebSocket,sendNotificationToAll} = require('./websocket/websocket');
const app = express(); 

const server = http.createServer(app);

const port =  process.env.PORT||3008;

// env()
// Connect to the database
mongoDB();

// Middleware 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routers
// app.use('/', (req,res)=>{
//   res.json({message : "successful "})
// })
app.use('/auth', Api.authRouter); 
app.use('/todo', Api.todoRouter); ;
app.use('/status', (_req, res) => {
  return res.send({
    isSuccess: true,
    // memory: process.memoryUsage(),
    results: {
        message: `App is running on Port ${port}.`,
    },
    Date: new Date(),
})
});

server.listen(port, (err) => {
  if (err) {
    return console.log('ERROR', err);
  }
  console.log(`Listening on port ${port} -- connected successfully`);
});