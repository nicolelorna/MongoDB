const express = require ('express');
const bodyparser = require('body-parser');
//MEAN
const app = express();
app.use(bodyparser.urlencoded({extended: true})) // paarse requests of application/x
app.use(bodyparser.json());//paarse request of json type

//Database configuration
const dbconfig = require ('./configuration/db.config.js');


const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;

//Db connection
mongoose.connect(dbconfig.url,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=>{
    console.log("success");
}).catch(err=>{
    console.log('failed',err);
    process.exit();
});


app.get('/',(req,res)=>{
    res.json({"message":"Welcome to the site"});
});
//define all routes
// require('./app/routes/notes.routes.js')(app);

app.listen(3000,()=>{
    console.log("Listening on port 3000");
});

