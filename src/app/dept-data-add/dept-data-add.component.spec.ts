import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptDataAddComponent } from './dept-data-add.component';

describe('DeptDataAddComponent', () => {
  let component: DeptDataAddComponent;
  let fixture: ComponentFixture<DeptDataAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptDataAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptDataAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
