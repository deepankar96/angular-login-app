import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department-login-page',
  templateUrl: './department-login-page.component.html',
  styleUrls: ['./department-login-page.component.css']
})
export class DepartmentLoginPageComponent implements OnInit {

  url =  'http://localhost:3000/api/departmentLogin';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  loginToDepartment(postform:NgForm){
    this.http.post<{}>(this.url,postform.value).subscribe(
      (responseData)=>{
        console.log(postform.value)
      }
    );
  }

}
