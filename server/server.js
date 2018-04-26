const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express(); 
const PORT = process.env.PORT || 5000; 

app.use(express.static('server/public'));
app.use(bodyParser.json());

const Food = require('./models/food.schema'); 

//--------------Connecting to Mongo Start-----------------//
const databaseUrl = 'mongodb://localhost:27017/library'; //new
mongoose.connect(databaseUrl) //new

mongoose.connection.on('connected', ()=>{
    console.log(`mongoose connected to ${databaseUrl}`);
}); //new

mongoose.connection.on('error', (error) =>{
    console.log('mongoose connection error', error);
    
}); //new
//--------------Connecting to Mongo End-----------------//

var food = [];

app.get('/food', (req,res)=>{
    res.send(food);
});

app.post('/foodArray', (req,res) => {
    food.push(req.body);
    res.send(200);
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});