import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinTrackerComponent } from './vin-tracker.component';

describe('VinTrackerComponent', () => {
  let component: VinTrackerComponent;
  let fixture: ComponentFixture<VinTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
