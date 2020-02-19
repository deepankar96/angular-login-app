import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptDataDisplayBoxComponent } from './dept-data-display-box.component';

describe('DeptDataDisplayBoxComponent', () => {
  let component: DeptDataDisplayBoxComponent;
  let fixture: ComponentFixture<DeptDataDisplayBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptDataDisplayBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptDataDisplayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
