import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterHeartRatePageRoutingModule } from './enter-heart-rate-routing.module';

import { EnterHeartRatePage } from './enter-heart-rate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterHeartRatePageRoutingModule
  ],
  declarations: [EnterHeartRatePage]
})
export class EnterHeartRatePageModule {}
