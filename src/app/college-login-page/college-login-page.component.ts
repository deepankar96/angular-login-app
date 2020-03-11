import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-college-login-page',
  templateUrl: './college-login-page.component.html',
  styleUrls: ['./college-login-page.component.css']
})
export class CollegeLoginPageComponent implements OnInit {



  url= 'http://localhost:3000/api/collegeLogin';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(postForm:NgForm){
    this.http.post<{message:string,token:string}>(this.url,postForm.value).subscribe(
      (responseData)=>{
        console.log(responseData.message)
        console.log(responseData.token)
      }
    );
  }

}
