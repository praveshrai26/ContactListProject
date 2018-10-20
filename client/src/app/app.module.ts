import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Http, HttpModule } from '../../node_modules/@angular/http';
import { ContactService } from './contact.service';
import{FormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponentComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponentComponent},
      {path:'contact',component:ContactsComponent},
      {path:'login',component:LoginComponent},
      {path:'',component:LoginComponent}
    ])
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
