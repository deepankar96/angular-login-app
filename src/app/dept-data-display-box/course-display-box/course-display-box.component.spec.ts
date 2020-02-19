import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDisplayBoxComponent } from './course-display-box.component';

describe('CourseDisplayBoxComponent', () => {
  let component: CourseDisplayBoxComponent;
  let fixture: ComponentFixture<CourseDisplayBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDisplayBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDisplayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
