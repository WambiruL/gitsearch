import { UserService } from './../user.service';
import { Repo } from './../repo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos:Repo;

  constructor(public reposervice: UserService) { }

  repoSearch(searchName: string){
    this.reposervice.getRepos(searchName).then(
      (_results: any)=>{
        this.repos=this.reposervice.allRepos
        console.log(this.repos);
      },
      (error: any)=>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.repoSearch('WambiruL')
  }

}
