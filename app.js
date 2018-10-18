//impporting modules
var express=require('express');
var mongoose = require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');
var session= require('express-session')


var app=express();
app.use(session({secret:'shhh'}))
const route=require('./routes/route');
mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected',function(){

  console.log("connection established suscessfully");
})
const port=3000;
app.use(cors());

 app.use(bodyparser.json());

 app.use(express.static(path.join(__dirname,"public")));


 
  



//testing server
app.get('/',function(req,res){

  res.send("welcome to my application");  
});

app.use("/api",route)

app.listen(port,function(){

console.log("server started at port: "+port);


});

