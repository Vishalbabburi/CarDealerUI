import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnectedVehicleComponent } from './connected-vehicle/connected-vehicle.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { VinTrackerComponent } from './vin-tracker/vin-tracker.component';
import { WarrantyComponent } from './warranty/warranty.component';

const routes: Routes = [{path:"subscriptions",component:SubscriptionComponent},
                        {path:"warranty",component:WarrantyComponent},
                        {path:"connectedVehicle",component:ConnectedVehicleComponent},
                        {path:"vinTracker",component:VinTrackerComponent},
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
