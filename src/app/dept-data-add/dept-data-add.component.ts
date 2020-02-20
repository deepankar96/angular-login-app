import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { department } from 'src/model';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../app.services';


@Component({
  selector: 'app-dept-data-add',
  templateUrl: './dept-data-add.component.html',
  styleUrls: ['./dept-data-add.component.css']
})
export class DeptDataAddComponent implements OnInit {
  @Input() deptid:number;
  collegeid:string;
  departmentid:string;
  departmentname:string;
  url_post:string = 'http://localhost:3000/api/adddept';

  constructor(private http:HttpClient,public departmentservice:DepartmentService) {

   }

  ngOnInit(): void {
  }

  onNewDepartment(){
    this.deptid+=1;
    const sendingData:department = {
      id:this.deptid,
      collegeid:this.collegeid,
      departmentid:this.departmentid,
      departmentname:this.departmentname,
    }
    // this.http.post<{message:string}>(this.url_post,sendingData).subscribe((responseData)=>{
    //   if(responseData.message == "success"){
    //   this.departmentservice.addDepartment(sendingData)}
    // })
    this.departmentservice.addDepartment(sendingData)
  }

}
