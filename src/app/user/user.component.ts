import { Repo } from './../repo';
import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users!: User;
  repos!:Repo;

  constructor(public myservice:UserService, private reposervice: UserService) { }

  searchs(searchName){
    this.myservice.searchUser(searchName).then(
      (success)=>{
        this.users=this.myservice.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
    this.reposervice.getRepos(searchName).then(
      (results)=>{
        this.repo =this.reposervice.allRepos
        console.log(this.repos);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.searchs('WambiruL')
  }

}
