import { Component, OnInit } from '@angular/core';
import { employee } from '../../model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: employee[] = [
    {id:0,name:"Deepankar",username:"deepankar"},
    {id:1,name:"test",username:"test"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
