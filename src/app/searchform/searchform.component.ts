import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  searchName!: string;

  @Output() searchOutput = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }
  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName="";
  }

}
