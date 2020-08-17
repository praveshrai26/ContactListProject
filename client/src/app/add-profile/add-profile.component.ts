import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';
import { Router, ActivatedRoute } from '@angular/router';

import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
    contact :Contact[];
    con :Contact
  
  _id;
  firstName;
  lastName;
  phoneNumber;
  refBy;
  k
    currentLocation;
    locationPref;
    itExp;
    rpaExp;
    noticePeriod;
    l1;
    l2;
    l1Stat;
    l2Stat;
    l1date;
    l2date;
    l1Com;
    l2Com;
    added:boolean=false
  constructor(private contactService:ContactService,private route:Router,router:ActivatedRoute) { 
    this.contact=[]
    this.con=new Contact
    this.con._id=router.snapshot.params['id'];
    console.log(this.con._id)
    if(this.con._id){
      console.log("in if")
      
      this.contactService.getContactById(this.con._id).subscribe(res =>{
        this.con =res.json();
        console.log("return from backend after getting by id")
      console.log(this.con)
      
      this.con.l1date = new DatePipe('en-US').transform(this.con.l1date, 'yyyy-MM-dd')
      this.con.l2date = new DatePipe('en-US').transform(this.con.l2date, 'yyyy-MM-dd')
      console.log(this.con.l1date)
      
       
  
        
      });
      
     
    } 
    
    
    

    
  }
  
  ngOnInit() {
    
    
  }

  addContact(){
    console.log("IN ADD CONTACT METHOD"+this.con.firstName)
    const contacts={
    _id:this.con._id,
    firstName:this.con.firstName,
    lastName:this.con.lastName,
    phoneNumber:this.con.phoneNumber,
    refBy:this.con.refBy,
    currentLocation:this.con.currentLocation,
    locationPref:this.con.locationPref,
    itExp:this.con.itExp,
    rpaExp:this.con.rpaExp,
    noticePeriod:this.con.noticePeriod,
    l1:this.con.l1,
    l2:this.con.l2,
    l1Stat:this.con.l1Stat,
    l2Stat:this.con.l2Stat,
    l1date:this.con.l1date,
    l2date:this.con.l2date,
    l1Com:this.con.l1Com,
    l2Com:this.con.l2Com
  }
  
    
    this.contactService.addContact(contacts).subscribe(res=>
      {
        console.log(res.json())
        this.contact.push(contacts);
      });
      this.con=new Contact
      this.firstName="";
      this.lastName="";
      this.phoneNumber="";
     this.refBy="";
      this.currentLocation="";
      this.locationPref="";
      this.itExp="";
      this.rpaExp="";
      this.noticePeriod="";
     this.l1="";
     this.l2="";
      this.l1Stat="";
     this.l2Stat="";
      this.l1date="";
      this.l2date="";
      this.l1Com="";
      this.l2Com="";    
      }

}
