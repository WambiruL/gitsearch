import { Repo } from './repo';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  foundUser:User;
  allRepos:Repo;
  repoData=[];
  newUserData:any=[];
  showInput:boolean;
  showData:boolean;

  constructor(private http:HttpClient) {
    this.foundUser=new User("","","",0,0,0,"", new Date())
    this.allRepos=new Repo("","","","",new Date(),0,0,"")
  }


  searchUser(searchName:string){

    this.repoData.length=0;

    interface ApiResponse {

      url:string;
      login: string;
      html_url:string;
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    let promise=new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+searchName).toPromise().then(response=>{
        this.foundUser.url=response.url;
        this.foundUser.login=response.login;
        this.foundUser.public_repos=response.public_repos;
        this.foundUser.html_url=response.html_url;
        this.foundUser.followers=response.followers;
        this.foundUser.following=response.following;
        this.foundUser.avatar_url=response.avatar_url;
        this.foundUser.created_at=response.created_at;

        resolve();

      },

      (error)=>{
        reject(error);
      }
      );

      this.http.get<any>('https://api.github.com/users/'+searchName+"/repos").toPromise().then(response=>{
        for(var i=0; 1<response.lenght;i++){

          this.newUserData= new Repo(response[i].name,response[i].html_url,response[i].clone_url, response[i].description,response[i].language,response[i].created_at, response[i].forks, response[i].watchers_count);
          this.repoData.push(this.newUserData);
        }

        resolve();

      },
      (error)=>{
        reject(error);

      }

      )


  })
  return promise
  }


}
