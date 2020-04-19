import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyItemComponent } from '@src/app/hourly/hourly-item/hourly-item.component';

describe('HourlyItemComponent', () => {
  let component: HourlyItemComponent;
  let fixture: ComponentFixture<HourlyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
