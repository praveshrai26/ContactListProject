import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Http, HttpModule } from '../../node_modules/@angular/http';
import { ContactService } from './contact.service';
import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
