import { Component, OnInit } from '@angular/core';
import { CollegeLoginService } from '../services/collegeLogin.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public colllegeLoginService:CollegeLoginService) { }

  ngOnInit(): void {
  }

  reset(){
    this.colllegeLoginService.logout()
  }

}
