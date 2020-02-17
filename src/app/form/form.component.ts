import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
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
  @Input() id:number;
  @Output() empCreated = new EventEmitter();
  
  constructor(private http:HttpClient){
    
  }

  ngOnInit(): void {
  }

  

  onTypenew(){
    this.id+=1;
    const sendingData:employee = {
      id:this.id,
      email:this.email,
      username:this.username
    }
    this.http.post<{message:string}>(this.url_post,sendingData).subscribe((responseData)=>{
      if(responseData.message == "success"){
      this.empCreated.emit(sendingData);}
    })
  }

}
