import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHodDetailsComponent } from './list-hod-details.component';

describe('ListHodDetailsComponent', () => {
  let component: ListHodDetailsComponent;
  let fixture: ComponentFixture<ListHodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHodDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
