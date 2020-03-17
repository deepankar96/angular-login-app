import { Component, OnInit } from '@angular/core';
import { DepartmentLoginService } from '../services/departmentLogin.services';

@Component({
  selector: 'app-department-homepage',
  templateUrl: './department-homepage.component.html',
  styleUrls: ['./department-homepage.component.css']
})
export class DepartmentHomepageComponent implements OnInit {

  constructor(public departmentLoginService:DepartmentLoginService) { }

  ngOnInit(): void {
    console.log(this.departmentLoginService.getCollegeId())
  }

}
