const mongoose = require('mongoose');




const contactSchema=mongoose.Schema({
firstName:String,
lastName:String,
phoneNumber:String,
l1Date:Date,
l2Date:Date,
  refBy:String,
     currentLocation:String,
      locationPref:String,
      itExp:Number,
     rpaExp:Number,
      noticePeriod:Number,
     l1:String,
     l2:String,
      l1Stat:String,
     l2Stat:String,
      l1Com:String,
      l2Com:String, 

},{collection:'contact'});//by default it add s in your collection hence we need to forcefully
                         // tell to take the collection as contact 


const contact=module.exports=mongoose.model('contact',contactSchema);