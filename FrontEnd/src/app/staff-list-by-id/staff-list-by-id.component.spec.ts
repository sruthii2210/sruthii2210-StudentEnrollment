import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffListByIdComponent } from './staff-list-by-id.component';

describe('StaffListByIdComponent', () => {
  let component: StaffListByIdComponent;
  let fixture: ComponentFixture<StaffListByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffListByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffListByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
