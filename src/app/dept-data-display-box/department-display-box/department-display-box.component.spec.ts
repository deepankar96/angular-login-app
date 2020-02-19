import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDisplayBoxComponent } from './department-display-box.component';

describe('DepartmentDisplayBoxComponent', () => {
  let component: DepartmentDisplayBoxComponent;
  let fixture: ComponentFixture<DepartmentDisplayBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDisplayBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDisplayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
