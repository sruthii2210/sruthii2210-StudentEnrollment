import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodViewProfileComponent } from './hod-view-profile.component';

describe('HodViewProfileComponent', () => {
  let component: HodViewProfileComponent;
  let fixture: ComponentFixture<HodViewProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodViewProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
