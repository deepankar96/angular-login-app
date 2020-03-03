import { Component, OnInit,Input } from '@angular/core';
import { department } from 'src/model';
import { DepartmentService } from 'src/app/app.services';

@Component({
  selector: 'app-department-display-box',
  templateUrl: './department-display-box.component.html',
  styleUrls: ['./department-display-box.component.css']
})
export class DepartmentDisplayBoxComponent implements OnInit {
  departments:department[] = [];
  constructor(public departmentservice:DepartmentService) { }

  ngOnInit(): void {
     // this.departments = this.departmentservice.getDepartment();
  }

}
