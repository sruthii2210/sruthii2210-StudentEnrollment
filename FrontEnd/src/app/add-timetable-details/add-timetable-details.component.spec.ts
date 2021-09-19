import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimetableDetailsComponent } from './add-timetable-details.component';

describe('AddTimetableDetailsComponent', () => {
  let component: AddTimetableDetailsComponent;
  let fixture: ComponentFixture<AddTimetableDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimetableDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimetableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
