import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  contact :Contact[];
  searchText;
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
  //firstName:string

  constructor(private contactService:ContactService,private route:Router) { }

  ngOnInit() {
    if(localStorage.getItem('id_token'))
    {
   this.contactService.getContacts().subscribe(res =>{
      this.contact =res.json();
     

      
    });
  }
  else
  this.route.navigate(['/login'])
  }
  deleteContact(k){
    console.log("in contact comp delete method")
    var index=this.contact.indexOf(k);
    this.contact.splice(index,1);
    this.contactService.deleteContact(k._id).subscribe(res=>{
      console.log("del response is"+res.status)
    })

}
}