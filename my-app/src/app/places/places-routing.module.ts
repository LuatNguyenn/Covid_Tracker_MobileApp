import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover', children: [
          { path: '', loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule) }
        ]
      },

      {
        path: ':placeId',
        loadChildren: () => import('./discover/place-details/place-details.module').then(m => m.PlaceDetailsPageModule)
      },
      //in case navigate to /places/tabs
      { path: '', redirectTo: '/places/tabs/discover', pathMatch: 'full' }
    ]
  },
  {
    //need to match tab name
    path: 'offers', children: [
      { path: '', loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule) },
      { path: 'new', loadChildren: () => import('./offers/new-offer/new-offer.module').then(m => m.NewOfferPageModule) }, //hard code route first
      { path: 'edit/:placeId', loadChildren: () => import('./offers/edit-offer/edit-offer.module').then(m => m.EditOfferPageModule) },
      { path: ':placeId', loadChildren: () => import('./offers/place-booking/place-booking.module').then(m => m.PlaceBookingPageModule) },
    ]
  },
  { path: '', redirectTo: 'tabs/discover', pathMatch: 'full' } //pathMatch to ensure correct path places/tabs...

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule { }
