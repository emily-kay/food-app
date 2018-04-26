const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express(); 
const PORT = process.env.PORT || 5000; 

app.use(express.static('server/public'));
app.use(bodyParser.json());

const Food = require('./models/food.schema'); 

//--------------Connecting to Mongo Start-----------------//
const databaseUrl = 'mongodb://localhost:27017/kitchen'; //new
mongoose.connect(databaseUrl) //new

mongoose.connection.on('connected', ()=>{
    console.log(`mongoose connected to ${databaseUrl}`);
}); //new

mongoose.connection.on('error', (error) =>{
    console.log('mongoose connection error', error);
    
}); //new
//--------------Connecting to Mongo End-----------------//

app.get('/food', (req,res)=>{
    Food.find({})
        .then((data) =>{
            res.send(data);
        }).catch((error)=>{
            res.send(500);
        });
});

app.post('/foodArray', (req,res) => {
    Food.create(req.body)
        .then(() =>{
            res.sendStatus(200);
        }).catch((error)=>{
            res.sendStatus(500);
            console.log(error);
            
        });
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});