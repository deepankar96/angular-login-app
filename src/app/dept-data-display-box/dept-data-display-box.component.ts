import { Component, OnInit,Input } from '@angular/core';
import { department, course } from 'src/model';

@Component({
  selector: 'app-dept-data-display-box',
  templateUrl: './dept-data-display-box.component.html',
  styleUrls: ['./dept-data-display-box.component.css']
})
export class DeptDataDisplayBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() departments:department[] = [];
  @Input() courses:course[] = [];
}
