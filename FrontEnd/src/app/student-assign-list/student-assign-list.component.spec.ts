import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAssignListComponent } from './student-assign-list.component';

describe('StudentAssignListComponent', () => {
  let component: StudentAssignListComponent;
  let fixture: ComponentFixture<StudentAssignListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAssignListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAssignListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
