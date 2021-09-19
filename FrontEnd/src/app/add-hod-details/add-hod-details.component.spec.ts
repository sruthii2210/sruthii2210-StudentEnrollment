import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHodDetailsComponent } from './add-hod-details.component';

describe('AddHodDetailsComponent', () => {
  let component: AddHodDetailsComponent;
  let fixture: ComponentFixture<AddHodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHodDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
