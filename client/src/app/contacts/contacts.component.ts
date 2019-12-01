import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 
  contact :Contact[];
  firstName;
  lastName;
  phoneNumber;
  refBy;
     currentLocation;
      locationPref;
      itExp;
     rpaExp
      noticePeriod;
     l1;
     l2;
      l1Stat;
     l2Stat;
     l1date;
      l2date;
      l1Com;
      l2Com;   
  //firstName:string;
  constructor(private contactService:ContactService,private route:Router) {
    
   }

  ngOnInit() {  
    // console.log(this.contactService.getContacts());
    if(localStorage.getItem('id_token'))
    {
   this.contactService.getContacts().subscribe(res =>{
      this.contact =res.json();
     

      
    });
  }
  else
  this.route.navigate(['/login'])
  

  //  this.contactService.getContacts().subscribe(res =>{console.log(res.json())});
  
  //  console.log(this.val);
  //  console.log( this.contactService.getContacts());
  }
  
  deleteContact(k){
    console.log("in contact comp delete method")
    var index=this.contact.indexOf(k);
    this.contact.splice(index,1);
    this.contactService.deleteContact(k._id).subscribe(res=>{
      console.log("del response is"+res.status)
    })

  }
  logout(){
    this.contactService.logout().subscribe(res=>{
      localStorage.removeItem('id_token')
      console.log("logged out");
    this.route.navigate(['/login'])
    })
  }

  

}
