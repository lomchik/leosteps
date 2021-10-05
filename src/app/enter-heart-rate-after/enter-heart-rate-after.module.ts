import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterHeartRateAfterPageRoutingModule } from './enter-heart-rate-after-routing.module';

import { EnterHeartRateAfterPage } from './enter-heart-rate-after.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterHeartRateAfterPageRoutingModule
  ],
  declarations: [EnterHeartRateAfterPage]
})
export class EnterHeartRateAfterPageModule {}
