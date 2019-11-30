import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import{Contact} from './contact';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
val:any[];
  constructor(private http:Http) { }
  

  getContacts(){
    // .subscribe(res=>{this.val=res.json()}))

    
   return(this.http.get('http://localhost:3000/api/contact'));
  //  .subscribe(res=>{
  //    this.val = res.json();
  //   });
  //  console.log(this.val);
    // return this.val ;
  }
login(id,pwd){
  console.log("in contact service login method"+id);
  return(this.http.post('http://localhost:3000/api/login',{id,pwd}));
}
  addContact(contact){ 
    return(this.http.post('http://localhost:3000/api/contacts',contact));
  }
  deleteContact(id){
    console.log("in contact service delete method")
return(this.http.delete('http://localhost:3000/api/contact/'+id))
  }

  logout(){
    console.log("in contact service logout");
    return(this.http.get('http://localhost:3000/api/logout'))

  }
}

