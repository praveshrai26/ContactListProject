const mongoose = require('mongoose');




const contactSchema=mongoose.Schema({
firstName:String,
lastName:String,
phoneNumber:String
},{collection:'contact'});//by default it add s in your collection hence we need to forcefully
                         // tell to take the collection as contact 


const contact=module.exports=mongoose.model('contact',contactSchema);