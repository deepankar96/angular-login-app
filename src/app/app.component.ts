import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  email:string;
  password:string;
  url = 'http://localhost:3000/1';
  title = 'login-angular-app';
  

  constructor(private http:HttpClient){
    http.get(this.url).toPromise().then(
      data =>{
        console.log(data);
      }
    )
  }
  
  
  onType(){
    this.http.get(this.url).toPromise().then(
      data =>{
        console.log(data);
      }
    );
  }
}
