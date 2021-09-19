import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHodDetailsComponent } from './update-hod-details.component';

describe('UpdateHodDetailsComponent', () => {
  let component: UpdateHodDetailsComponent;
  let fixture: ComponentFixture<UpdateHodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHodDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
