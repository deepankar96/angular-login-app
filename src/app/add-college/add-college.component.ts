import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {
  isLoading:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onNewCollege(postForm:NgForm){
    
  }

}
