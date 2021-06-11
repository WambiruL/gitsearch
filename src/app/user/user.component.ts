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
  router: any;
  goToUrl(id){
    this.router.navigate(['/repos', id])
  }
  users:User;
  repos:Repo[];

  constructor(public myservice:UserService, private reposervice: UserService) { }

  searchs(searchName: string){
    this.myservice.searchUser(searchName).then(
      (_success: any)=>{
        this.users=this.myservice.foundUser;
      },
      (error: any)=>{
        console.log(error)
      }
    );
    this.reposervice.getRepos(searchName).then(
      ()=>{
       // this.repos=this.reposervice.allRepos
        console.log(this.repos);
      },
      (error: any)=>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.searchs('WambiruL')
  }

}
