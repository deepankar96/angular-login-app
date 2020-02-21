import { Component, OnInit, OnDestroy } from '@angular/core';
import { department } from 'src/model';
import { DepartmentService } from '../app.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit,OnDestroy {
  departments:department[] = [];
  private departmentSub:Subscription;
  constructor(public DepartmentServices:DepartmentService) { }

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

}
