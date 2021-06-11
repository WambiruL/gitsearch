import { Repo } from './repo';
import { User } from './user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  foundUser:User;
  allRepos:Repo;

  constructor(private http:HttpClient) {
    this.foundUser=new User("","","",0,0,0,"", new Date)
    this.allRepos=new Repo("","","",new Date,0,0,"")
  }


  searchUser(searchName:string){
    interface Response {
      url:string;
      login: string;
      html_url:string;
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    return new Promise<void>((resolve,reject)=>{
    this.http.get<Response>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(
      (result)=>{
        this.foundUser=result;
        console.log(this.foundUser);
        resolve();
      },
      (error)=>{
        console.log(error);
        reject();
      }
    );
  });
  }

  getRepos(searchName){
    interface Repo{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }

    return new Promise<void>((resolve,reject)=>{
      this.http.get<Repo>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
        (results)=>{
          this.allRepos=results;
          resolve();
        },
        (error)=>{
          console.log(error);
          reject();
        }
      );
    });
  }


}
