const express=require("express");
const router=express.Router();
const contact=require('../models/contacts');
const login=require('../models/loginDetails')



var app=express();


router.post('/login',function(req,res){
    console.log("in route login")
   
    var uid=req.body.id;
    var password=req.body.pwd;
 login.find({$and:[{id:uid},{pwd:password}]}).count(function(err,count){
     if(count>0){
        req.session.id=req.body.id;
        console.log("true login "+count+" set session "+req.session.id)
        res.json("passed")
     }
     else{
        console.log("false login"+count)
        res.json("failed")}
 });
    
   
   
    
 })



router.get("/contact",function(req,res){
   if(req.session.id){
       console.log("session id is "+req.session.id)
contact.find({},function(err,contacts){
    res.json(contacts);
    
})
   }
   else{
       res.send('log in please')
   }



});




router.post('/contacts',function(req,res){
let newContact = new contact({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    phoneNumber:req.body.phoneNumber
});
newContact.save(function(err,contact){
if(err){
res.json({msg : "failed to insert"});
}
else{
    res.json({msg : "contact added sucessfully"});
}


});  

});
router.delete("/contact/:id",function(req,res){
    console.log("IN ROUTER DELETE METHOD")
    
contact.remove({_id:req.params.id},function(err,result){
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
})


module.exports=router;