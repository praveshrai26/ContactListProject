const express=require("express");
const router=express.Router();
const contact=require('../models/contacts');
const login=require('../models/loginDetails');
var session= require('express-session')
var mongodb = require('mongoose');



var app=express();

app.use(session({secret:'shhh'}))
//router.use('/',express.static(''))
router.get("/",function(req,res){
    res.json({"name":"Pravesh"})
})
router.post("/login",function(req,res){
    console.log("in route login")
    
    
    var id=req.body.id;
    var password=req.body.pwd;
    console.log(id,password)
 login.find({$and:[{uid:id},{pwd:password}]}).count(function(err,count){
     console.log("finding"+count)
     if(count>0){
      
        console.log("true login "+count)
        res.json("passed")
     }
     else{
        console.log("false login"+count)
        res.json("failed")}
 });
    
   
   
    
 })



router.get("/contact",function(req,res){
   
contact.find({},function(err,contacts){
    res.json(contacts);
    
})
   
   



});




router.post('/contacts',function(req,res){
let newContact = new contact({
    
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    phoneNumber:req.body.phoneNumber,
    l1date:req.body.l1date,
    l2date:req.body.l2date,
    refBy:req.body.refBy,
     currentLocation:req.body.currentLocation,
      locationPref:req.body.locationPref,
      itExp:req.body.itExp,
     rpaExp:req.body.rpaExp,
      noticePeriod:req.body.noticePeriod,
     l1:req.body.l1,
     l2:req.body.l2,
      l1Stat:req.body.l1Stat,
     l2Stat:req.body.l2Stat,
      l1Com:req.body.l1Com,
      l2Com:req.body.l2Com, 
});

console.log("before checking already exsisting condition")
contact.findById(req.body._id).count(function(err,count){// change to find contact by id
    console.log(count)
        if(count>0){
            console.log("updating contact")
            contact.findByIdAndDelete(req.body._id,function(err,res){// cahnge to delete by id
                if(err)
                console.log(err)
                else
                console.log("deleted")
            })

        }
        else{
            console.log("new contacts")
        }
        console.log("before saving the contact")
        newContact.save(function(err,contact){
           
        if(err){
            console.log(err)
        res.json({msg : "failed to insert"});
        }
        else{
            
            res.json({msg : "contact added sucessfully"});
        }
    
       
       /* console.log(contacts)
        
        */
        
        }); 
    

})
})
 

router.get("/contactbyid/:id",function(req,res){
    console.log("in getcontactbyid in node")
    console.log(req.params.id);
    contact.findById(req.params.id,function(err,contacts){
        if(err){
            console.log(err)
        }
        else
        {
            console.log(contacts)
        res.json(contacts)}
    
    })
    
    
    
    
    
    })

router.get("/contact/:id",function(req,res){

console.log(req.params.id);
contact.find({firstName:req.params.id},function(err,contacts){
    if(err){
        console.log(err)
    }
    else
    {
        console.log(contacts)
    res.json(contacts)}

})





})
router.delete("/contact/:id",function(req,res){
    console.log("IN ROUTER DELETE METHOD")
    
contact.deleteOne({_id:req.params.id},function(err,result){
     if(err){
         console.log("error deleting")
    }
    else{
        console.log("Deleted sucessfully")
    }
});
});
router.get('/logout',function(req,res){
   req.session.destroy(function(err){
       if(err){
           console.log(err)
       }
       else(
           console.log("logged out")
       )
   })
   res.json();
})


module.exports=router;