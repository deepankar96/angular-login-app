import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {

  collegeId:string;

  constructor(http:HttpClient) { }

  ngOnInit(): void {
  }

  generateCollegeId(collegeName:string,collegeState:string,collegeType:string,collegeCity:string){
    const currentTime = new Date()
    const year = currentTime.getFullYear()
    this.collegeId = (collegeName[0].toUpperCase()+collegeName[1].toUpperCase()+collegeState+collegeType+collegeCity[0]+year)
  }

  onNewCollege(postForm:NgForm){
    console.log(postForm.value)
    this.generateCollegeId(postForm.value.collegeName,postForm.value.collegeState,postForm.value.collegeType,postForm.value.collegeCity)
    
  }

}
