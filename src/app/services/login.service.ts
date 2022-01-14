import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  user:User=new User();

  public loginUser(user:User):User{
      this.user.id=1;
      this.user.emailId='nayana@gmail.com';
      this.user.userName='nayana';
      this.user.password='1234';

      return this.user;
  }
}
