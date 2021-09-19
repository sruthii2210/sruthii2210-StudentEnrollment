import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAsignStudentComponent } from './update-asign-student.component';

describe('UpdateAsignStudentComponent', () => {
  let component: UpdateAsignStudentComponent;
  let fixture: ComponentFixture<UpdateAsignStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAsignStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAsignStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
