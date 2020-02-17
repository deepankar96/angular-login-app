import { Component, OnInit,Input } from '@angular/core';
import { employee } from '../../model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  @Input() users:employee[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
