import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  foundUser:User;

  constructor() {
    this.foundUser=new User("","","",0,0,0,"", new Date)
   }
}
