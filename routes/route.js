const express=require("express");
const router=express.Router();
const contact=require('../models/contacts');



var app=express();


router.post('/login',function(req,res){
    req.session.id=req.body.id;
    console.log(req.session)
    res.send('sucess')
 })


router.get('/home',function(req,res){
    res.send("HOME")
})
router.get("/contact",function(req,res){
if(req.session){
    console.log(req.session.id)
contact.find({},function(err,contacts){
    res.json(contacts);
    
});
}
else
res.redirect('/home')

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
router.get("/contact/:id",function(req,res){
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
 req.session=null;
         console.log(req.session)
            res.send('logged out')
         
     
    
   
   
})


module.exports=router;