import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedVehicleComponent } from './connected-vehicle.component';

describe('ConnectedVehicleComponent', () => {
  let component: ConnectedVehicleComponent;
  let fixture: ComponentFixture<ConnectedVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
