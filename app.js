//impporting modules
var express=require('express');
var mongoose = require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');
var session= require('express-session')
var timeout = require('connect-timeout')

var app=express();
//app.use(timeout('5s'))
app.use(session({secret:'shhh'}))
const route=require('./routes/route');
mongoose.connect('mongodb+srv://raipravesh:admin123@cluster0-xyrfs.mongodb.net/contactlist');
mongoose.connection.on('connected',function(){

  console.log("connection established suscessfully");
})

app.use(cors());

 app.use(bodyparser.json());
const port=process.env.PORT||3000;
const ip=process.env.IP||"0.0.0.0";



 app.use('/',express.static(__dirname+'/dist/client'));


 
  



//testing server
app.get('/',function(req,res){

  res.send("welcome to my application");  
});

app.use("/api",route)

app.listen(port,ip,function(){

  console.log("server started at ip: "+ip)
console.log("server started at port: "+port);


});

