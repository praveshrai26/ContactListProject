import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
  contact :Contact[];
  constructor(private contactService:ContactService,private route:Router) { 
    this.contact=[];
  }
  
  firstName;
  lastName;
  phoneNumber;
  refBy;
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
  ngOnInit() {
  }

  addContact(){
    const contacts={
    firstName:this.firstName,
    lastName:this.lastName,
    phoneNumber:this.phoneNumber,
    refBy:this.refBy,
    currentLocation:this.currentLocation,
    locationPref:this.locationPref,
    itExp:this.itExp,
    rpaExp:this.rpaExp,
    noticePeriod:this.noticePeriod,
    l1:this.l1,
    l2:this.l2,
    l1Stat:this.l1Stat,
    l2Stat:this.l2Stat,
    l1date:this.l1date,
    l2date:this.l2date,
    l1Com:this.l1Com,
    l2Com:this.l2Com
  }
  console.log(contacts.l1date);
    
    this.contactService.addContact(contacts).subscribe(res=>
      {
        console.log(res.json())
        this.contact.push(contacts);
      });
      
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
