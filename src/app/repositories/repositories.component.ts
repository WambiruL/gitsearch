import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  user:User;
  username:string;
  UserService:UserService;
  public showInput=true;
  public showData=false;

  submitUsername(){
    this.UserService.searchUser(this.username);
    this.showInput=false;
    this.showData=true;
  }

  showUserInput(hideInput){
    this.showInput=hideInput;
    this.showData=false;
  }

  constructor(public myservice: UserService) {
    this.UserService=myservice;
  }

  ngOnInit(){
  }

}
