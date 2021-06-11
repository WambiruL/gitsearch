import { Repo } from './repo';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  foundUser:User;
  allRepos:Repo;

  constructor() {
    this.foundUser=new User("","","",0,0,0,"", new Date)
    this.allRepos=new Repo("","","",new Date,0,0,"")
   }
}
