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
mongoose.connect('mongodb+srv://raipravesh:admin123@cluster0-xyrfs.mongodb.net/contactlist');
mongoose.connection.on('connected',function(){

  console.log("connection established suscessfully");
})

const port=process.env.PORT||8082;
const ip=process.env.IP||"0.0.0.0";

app.use(cors());

 app.use(bodyparser.json());

 app.use('/',express.static('./dist/client'));


 
  



//testing server
app.get('/',function(req,res){

  res.send("welcome to my application");  
});

app.use("/api",route)

app.listen(port,ip,function(){

  console.log("server started at ip: "+ip)
console.log("server started at port: "+port);


});

