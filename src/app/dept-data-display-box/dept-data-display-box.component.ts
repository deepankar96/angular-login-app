import { Component, OnInit,Input } from '@angular/core';
import { department, course } from 'src/model';
import {DepartmentService} from "../app.services"
@Component({
  selector: 'app-dept-data-display-box',
  templateUrl: './dept-data-display-box.component.html',
  styleUrls: ['./dept-data-display-box.component.css']
})
export class DeptDataDisplayBoxComponent implements OnInit {
  departments:department[] = [];
  constructor(public departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.departments =  this.departmentService.getDepartment();
  }

  @Input() courses:course[] = [];
}
