import { Component } from '@angular/core';
import{ employee, department, course }from '../model';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


// constructor(private http:HttpClient){
//   this.http.get<{message:string,post}>(this.get_dept).subscribe((postData)=>{
//     this.numberOfDepartments=postData.post.length;
//     this.departments = postData.post;
//   });
//   this.http.get<{message:string,post}>(this.get_courses).subscribe((postData)=>{
//     this.numberOfCourses=postData.post.length;
//     this.courses = postData.post;
//   });
//     }

// departments:department[] = [];
// courses:course[] = [];
// get_dept = 'http://localhost:3000/api/department';
// get_courses = 'http://localhost:3000/api/courses';
// url_get = 'http://localhost:3000/posts';
// users:employee[] = []
// numberOfDepartments:number;
// numberOfCourses:number;

// addUsers(user){
//   this.users.push(user);
// }

// addDept(dept){
//   this.departments.push(dept);
// }

}
