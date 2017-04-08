import { Component, OnInit } from '@angular/core';
import {UserActionService} from '../services/user-action.service';
import { FlashMessagesService } from 'angular2-flash-messages/module';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
emp:any;
  constructor(private getempService:UserActionService,
  private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    this.getempService.url ='http://localhost:3000/users/emplist';
    this.getempService.getService().subscribe(data =>  {
    console.log(data);

    this.emp=data['data'];
   
// console.log(this.emp[0]["email"]);
  
    
  })

  }

}
