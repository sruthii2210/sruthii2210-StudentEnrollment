import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTimeTableDetailsComponent } from './list-time-table-details.component';

describe('ListTimeTableDetailsComponent', () => {
  let component: ListTimeTableDetailsComponent;
  let fixture: ComponentFixture<ListTimeTableDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTimeTableDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTimeTableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
