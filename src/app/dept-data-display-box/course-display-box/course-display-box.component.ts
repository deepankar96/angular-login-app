import { Component, OnInit,Input } from '@angular/core';
import { course } from 'src/model';

@Component({
  selector: 'app-course-display-box',
  templateUrl: './course-display-box.component.html',
  styleUrls: ['./course-display-box.component.css']
})
export class CourseDisplayBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() courses:course[] = [];

}
