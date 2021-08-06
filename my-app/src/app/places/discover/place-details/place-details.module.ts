import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailsPageRoutingModule } from './place-details-routing.module';

import { PlaceDetailsPage } from './place-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetailsPageRoutingModule
  ],
  declarations: [PlaceDetailsPage, CreateBookingComponent]
})
export class PlaceDetailsPageModule {}
