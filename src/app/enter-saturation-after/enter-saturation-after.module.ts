import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterSaturationAfterPageRoutingModule } from './enter-saturation-after-routing.module';

import { EnterSaturationAfterPage } from './enter-saturation-after.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterSaturationAfterPageRoutingModule
  ],
  declarations: [EnterSaturationAfterPage]
})
export class EnterSaturationAfterPageModule {}
