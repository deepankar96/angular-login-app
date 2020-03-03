import { Component, OnInit } from '@angular/core';
import { department } from 'src/model';
import { DepartmentService } from '../app.services';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  deptid=0;
  url_post="http://localhost:3000/api/adddept";
  constructor(public DepartmentServices:DepartmentService,private http:HttpClient,private router:Router) { }

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
    this.http.post<{message:string}>(this.url_post,sendingData).subscribe((responseData)=>{
      if(responseData.message == "success"){
        this.DepartmentServices.addDepartment(sendingData);
        this.router.navigate(['department'])
      }
    })
  }

}
