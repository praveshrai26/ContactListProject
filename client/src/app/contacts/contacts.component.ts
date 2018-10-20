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
  //firstName:string;
  constructor(private contactService:ContactService,private route:Router) {
    
   }

  ngOnInit() {  
    // console.log(this.contactService.getContacts());
    
   this.contactService.getContacts().subscribe(res =>{
      this.contact =res.json();
     

      
    });

  //  this.contactService.getContacts().subscribe(res =>{console.log(res.json())});
  
  //  console.log(this.val);
  //  console.log( this.contactService.getContacts());
  }
  addContact(){
const contacts={
firstName:this.firstName,
lastName:this.lastName,
phoneNumber:this.phoneNumber}
this.contactService.addContact(contacts).subscribe(res=>
  {
    console.log(res.json())
    this.contact.push(contacts);
  });
  this.firstName="";
  this.lastName="";
  this.phoneNumber="";

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
      console.log("logged out");
    this.route.navigate(['/login'])
    })
  }

  

}
