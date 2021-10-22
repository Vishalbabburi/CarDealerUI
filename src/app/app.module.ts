import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { ConnectedVehicleComponent } from './connected-vehicle/connected-vehicle.component';
import { VinTrackerComponent } from './vin-tracker/vin-tracker.component';
import { VehicleCardComponent } from './subscription/vehicle-card/vehicle-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubscriptionComponent,
    WarrantyComponent,
    ConnectedVehicleComponent,
    VinTrackerComponent,
    VehicleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
