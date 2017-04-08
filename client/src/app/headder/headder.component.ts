import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { Router } from '@angular/router';
import {UserActionService} from '../services/user-action.service';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.css']
})
export class HeadderComponent implements OnInit {

  constructor(private authService : UserActionService,
  private router : Router,
  private flashMessage : FlashMessagesService) { }
onlogout(){
  this.authService.logout();
  this.flashMessage.show("You are logged out",{cssClass:'alert-success',
 timeout:3000});
 this.router.navigate(['/login']);
 return false;
}
  ngOnInit() {
  }

}
