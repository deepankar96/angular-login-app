import { Component, OnInit,EventEmitter,Output } from '@angular/core';
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
  email:string;
  username:string;
  url_get = 'http://localhost:3000/posts';
  url_post = 'http://localhost:3000/test';
  title = 'login-angular-app';
  id: number = 0;
  @Output() empCreated = new EventEmitter();
  
  constructor(private http:HttpClient){
    
  }

  ngOnInit(): void {
  }

  



  onType(){
    this.http.get(this.url_get).toPromise().then(
      data =>{
        console.log(data);
      }
    );
  }

  onTypenew(){
    const emp = {
      id:this.id,
      email:this.email,
      username:this.username
    }
    this.id += 1;
    this.empCreated.emit(emp);
  }

}
