import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoginValidationComponent } from './student-login-validation.component';

describe('StudentLoginValidationComponent', () => {
  let component: StudentLoginValidationComponent;
  let fixture: ComponentFixture<StudentLoginValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLoginValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLoginValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
