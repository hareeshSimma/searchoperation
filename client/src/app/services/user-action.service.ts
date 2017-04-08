import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UserActionService {

  constructor(private http : Http) { }
url:string;
user:any;
authToken:any;
getService() {
   let headers = new Headers();
    headers.append('Content-Type', 'application/json');
     return this.http.get(this.url, { headers : headers})
      .map(res => res.json());
  }


  postService(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
     return this.http.post(this.url, user, { headers : headers})
      .map(res => res.json());
  }


  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  validateRegister(user) {
    if(user.firstName == undefined || user.lastName == undefined || user.email == undefined || user.empusername == undefined ||
     user.password == undefined || user.designation == undefined || user.phoneno == undefined ) {
      return false;
    }else {
      return true;
    }
  }

  logout(){
   
    this.authToken=null;
    this.user=null;
     localStorage.clear()
  }

}
