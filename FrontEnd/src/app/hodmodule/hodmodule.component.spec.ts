import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HODModuleComponent } from './hodmodule.component';

describe('HODModuleComponent', () => {
  let component: HODModuleComponent;
  let fixture: ComponentFixture<HODModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HODModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HODModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
