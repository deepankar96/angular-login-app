import { Component, OnInit, OnDestroy } from '@angular/core';
import { department } from 'src/model';
import { DepartmentService } from '../services/department.services';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit,OnDestroy {
  departments:department[] = [];
  private departmentSub:Subscription;
  constructor(public DepartmentServices:DepartmentService,private router:Router) { }

  ngOnInit(): void {
    this.DepartmentServices.getDepartment()
    this.departmentSub = this.DepartmentServices.getDepartmentListstner().subscribe(
      (departments:department[])=>{
        this.departments = departments;
      }
    );
  }

  ngOnDestroy():void{
    this.departmentSub.unsubscribe();
  }

  addDepartment(){
    this.router.navigate(['addDepartment'])
  }

}
