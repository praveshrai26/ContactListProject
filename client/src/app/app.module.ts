import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Http, HttpModule } from '../../node_modules/@angular/http';
import { ContactService } from './contact.service';
import{FormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';
import{AddProfileComponent} from './add-profile/add-profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponentComponent,
    LoginComponent,
    AddProfileComponent,
    ProfileDetailsComponent
    

  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
  
    
   
    
    
    RouterModule.forRoot( [
      {path:'home',component:HomeComponentComponent},
      {path:'contact',component:ContactsComponent,
      children:[
        {
         path : 'add',
         component: AddProfileComponent
        },
        {
          path : 'profile/:id',
          component: HomeComponentComponent
         },
         {
          path :  'edit/:id',
          component: AddProfileComponent
         },

         {
          path : '',
          component: ProfileDetailsComponent
         }
      ]},
      {path:'login',component:LoginComponent},
      {path:'',component:LoginComponent}
    ],{useHash: true})
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
