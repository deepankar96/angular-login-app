import { Component, OnInit } from '@angular/core';
import { department } from 'src/model';
import { DepartmentService } from '../app.services';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  deptid=0;

  constructor(public DepartmentServices:DepartmentService) { }

  ngOnInit(): void {
  }

  onNewDepartment(form:NgForm){
    if (form.invalid){
      return
    }
    const sendingData:department = {
      id:this.deptid,
      collegeid:form.value.collegeid,
      departmentid:form.value.departmentid,
      departmentname:form.value.departmentname,
    }
    this.DepartmentServices.addDepartment(sendingData);
  }
}
