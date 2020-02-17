import { Component } from '@angular/core';
import{ employee }from '../model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

users:employee[] = []

addUsers(user){
  this.users.push(user);
}



}
