import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private contactservice:ContactService,private route:Router) { }

id:any;
pwd:any;
login=false;
  ngOnInit() {

  }
  
  onLogin(){
    console.log("in onLogin method of angular"+this.id)

    this.contactservice.login(this.id,this.pwd).subscribe(res=>{
    if(res.json()=="passed"){
    
      localStorage.setItem('id_token','xyz'+this.id)
      this.route.navigate(['/contact'])

    }
    else{this.route.navigate(['/login'])}
    
    })
    
  }
   

  }

  
  
