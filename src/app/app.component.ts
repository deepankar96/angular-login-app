import { Component } from '@angular/core';
import{ employee }from '../model';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


constructor(private http:HttpClient){
  this.http.get<{message:string,post}>(this.url_get).subscribe((postData)=>{
    this.numberOfUsers=postData.post.length;
    this.users = postData.post;
  });
    }


url_get = 'http://localhost:3000/posts';
users:employee[] = []
numberOfUsers:number;

addUsers(user){
  this.users.push(user);
}



}
