import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  contact :Contact[];
 
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

}
