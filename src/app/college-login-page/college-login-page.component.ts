import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CollegeLoginService } from '../services/collegeLogin.services';

@Component({
  selector: 'app-college-login-page',
  templateUrl: './college-login-page.component.html',
  styleUrls: ['./college-login-page.component.css']
})
export class CollegeLoginPageComponent implements OnInit {



  url= 'http://localhost:3000/api/collegeLogin';

  constructor(private http:HttpClient,public collegeLoginService:CollegeLoginService) { }

  ngOnInit(): void {
  }

  onSubmit(postForm:NgForm){
    this.http.post<{message:string,token:string,collegeId:string}>(this.url,postForm.value).subscribe(
      (responseData)=>{
        if(responseData.message == "success"){
          this.collegeLoginService.loginTocollege(responseData.collegeId,responseData.token)
          console.log(this.collegeLoginService.getCollegeId())
          console.log(this.collegeLoginService.getToken())

        }
        else{
          console.log(responseData.message)
        }
      }
    );
  }

}
