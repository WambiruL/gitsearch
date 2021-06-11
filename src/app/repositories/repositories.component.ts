import { UserService } from './../user.service';
import { Repo } from './../repo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos!: Repo;

  constructor(public reposervice: UserService) { }

  repoSearch(searchName){
    this.reposervice.getRepos(searchName).then(
      (results)=>{
        this.repo=this.reposervice.allRepos
        console.log(this.repos);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.repoSearch('WambiruL')
  }

}
