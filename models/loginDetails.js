const mongoose=require('mongoose');

const LoginSchema=mongoose.Schema({
    uid:String,
    pwd:String
},{collection:'loginDetails'})

var login=module.exports=mongoose.model('login',LoginSchema);