import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import {employee} from '../../model';
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password:string;
  url_get = 'http://localhost:3000/posts';
  url_post = 'http://localhost:3000/test';
  title = 'login-angular-app';
  id: number = 0;
  
  constructor(private http:HttpClient){
    
  }

  ngOnInit(): void {
  }

  
  employee: employee[] = [];



  onType(){
    this.http.get(this.url_get).toPromise().then(
      data =>{
        console.log(data);
      }
    );
  }

  onTypenew(){
    this.http.post(this.url_post,this.email).toPromise().then(
      data =>{
        console.log(data);
      }
    ) 
  }

}
