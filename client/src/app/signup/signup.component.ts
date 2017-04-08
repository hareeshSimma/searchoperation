import { Component, OnInit } from '@angular/core';
import {UserActionService} from '../services/user-action.service';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fname:String;
  lname:String;
  email:String;
  username:String;
  pswd:String;
  empdes:String;
  mobileno:Number;


  constructor(private authService:UserActionService,
  private flashMessage:FlashMessagesService,
  private router : Router) { }


  register(){
const user = {
      firstName : this.fname,
      lastName : this.lname,
      email : this.email,
      empusername : this.username,
      password : this.pswd,
      designation : this.empdes,
      phoneno : this.mobileno
    }
console.log(user)
if(!this.authService.validateRegister(user)) {
      this.flashMessage.show('Please Fill All The Fields', { cssClass : 'alert-danger', timeOut : 9000 });
      return false;
    }



this.authService.url ='http://localhost:3000/users/signup';
    this.authService.postService(user).subscribe(data =>  {
      console.log(data);
      if(data.success) {
      this.flashMessage.show('Registered Successfully and you can Login now', {
         cssClass : 'alert-success', timeOut : 3000 })
      this.router.navigate(['/login']);
    }else {
      console.log(data);
      this.flashMessage.show('Something went wrong, Try again', { cssClass : 'alert-danger', timeOut : 3000 })
      this.router.navigate(['/signup']);
      }

    })

  }

  ngOnInit() {
  }

}
