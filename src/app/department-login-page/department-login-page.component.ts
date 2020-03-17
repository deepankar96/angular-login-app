import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-department-login-page',
  templateUrl: './department-login-page.component.html',
  styleUrls: ['./department-login-page.component.css']
})
export class DepartmentLoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginToDepartment(postform:NgForm){
    console.log(postform.value)
  }

}
