//const express = require('express');
const dotenv = require('dotenv').config({ path: './config.env' });
const app = require('./app')


const port = parseInt(process.env.RUNNING_PORT) || 3000;
//const PORT = 5500;


app.listen(port,function(){
    console.log('server run success on '+port);
})