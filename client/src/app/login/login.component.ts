import { Component, OnInit } from '@angular/core';
import {UserActionService} from '../services/user-action.service';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username:String;
  pswd:String;
  constructor(private authService:UserActionService,
  private flashMessage:FlashMessagesService,
  private router : Router) { }

  login(){
    const user={
      empusername : this.username,
      password : this.pswd
    }

    console.log(user)
this.authService.url ='http://localhost:3000/users/authenticate';
    this.authService.postService(user).subscribe(data =>  {
      console.log(data);
      if(data.success) {
        console.log(data);
      this.authService.storeUserData(data.token, data.user);
      this.flashMessage.show('Login Successfully', { 
        cssClass : 'alert-success', 
        timeOut : 9000 
      })
      this.router.navigate(['home/users']);
      }else {
      this.flashMessage.show(data.msg, { 
        cssClass : 'alert-danger', 
        timeOut : 9000 
      })
      this.router.navigate(['/login']);
      }

    })
  }

  ngOnInit() {
  }

}
