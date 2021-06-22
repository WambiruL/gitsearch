import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User;
  repoDetails=[];
  UserService: UserService;
  hideInput:boolean;

  constructor(public myservice:UserService) {
    this.UserService=myservice;
  }

  @Output() toggleBack= new EventEmitter();

  goBack(){
    this.hideInput=true;
    this.toggleBack.emit(this.hideInput);
  }

  ngOnInit(): void {
    this.user=this.UserService.foundUser
    this.repoDetails=this.UserService.repoData
  }

}
