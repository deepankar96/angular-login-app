import { Component, OnInit,Input } from '@angular/core';
import { department } from 'src/model';

@Component({
  selector: 'app-department-display-box',
  templateUrl: './department-display-box.component.html',
  styleUrls: ['./department-display-box.component.css']
})
export class DepartmentDisplayBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() departments:department[] = [];

}
