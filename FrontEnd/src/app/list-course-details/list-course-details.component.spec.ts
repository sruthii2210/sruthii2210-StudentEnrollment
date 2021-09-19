import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourseDetailsComponent } from './list-course-details.component';

describe('ListCourseDetailsComponent', () => {
  let component: ListCourseDetailsComponent;
  let fixture: ComponentFixture<ListCourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCourseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
