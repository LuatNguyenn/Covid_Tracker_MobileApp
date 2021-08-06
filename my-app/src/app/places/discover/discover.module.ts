import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';

import { DiscoverPage } from './discover.page';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'ngx-easy-table';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverPageRoutingModule,
    TableModule
  ],
  declarations: [DiscoverPage]
})
export class DiscoverPageModule {}
