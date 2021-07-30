const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const url = 'mongodb://localhost/crudAPI'


const app = express();

// Route
app.get('/',function(req,res){
    res.send('hello world')
})

// MongoDB connection
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection


con.on('open',function(){
    console.log('connected')
}).on('error',function(err){
    console.log('Error ', err);
})

// to read in json format
app.use(express.json());

// calling the broker route in the server file with a prefix /broker
const brokerRouter = require('./routes/brokers')
app.use('/broker',brokerRouter)



// Server
app.listen(3000,function(){
    console.log('server started');
});






