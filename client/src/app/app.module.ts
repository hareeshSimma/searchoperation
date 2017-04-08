import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeadderComponent } from './headder/headder.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule  } from './app.routing';
import {UserActionService} from './services/user-action.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { UserComponent } from './user/user.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeadderComponent,
    FooterComponent,
    UserComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
     FlashMessagesModule
  ],
  providers: [UserActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
