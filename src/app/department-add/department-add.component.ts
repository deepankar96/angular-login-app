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

  onNewDepartment(postForm:NgForm){
    console.log(postForm.value)
    if (postForm.invalid){
      return
    }
    const sendingData:department = {
      id:this.deptid,
      collegeid:postForm.value.collegeid,
      departmentid:postForm.value.departmentid,
      departmentname:postForm.value.departmentname,
    }
    this.DepartmentServices.addDepartment(sendingData);
  }


  checkForm(form: NgForm){
    console.log(form.value)
  }
}
