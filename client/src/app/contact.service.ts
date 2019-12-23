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
  
getContactByName(name){
return(this.http.get('/api/contact/'+name))


}
  getContacts(){
    // .subscribe(res=>{this.val=res.json()}))

    
   return(this.http.get('api/contact'));
  //  .subscribe(res=>{
  //    this.val = res.json();
  //   });
  //  console.log(this.val);
    // return this.val ;
  }
login(id,pwd){
  console.log("in contact service login method"+id);
  return(this.http.post('/api/login',{id,pwd}));
}
  addContact(contact){ 
    return(this.http.post('/api/contacts',contact));
  }
  deleteContact(id){
    console.log("in contact service delete method")
return(this.http.delete('/api/contact/'+id))
  }

  logout(){
    console.log("in contact service logout");
    return(this.http.get('/api/logout'))

  }
}

