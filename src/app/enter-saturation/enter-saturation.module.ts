import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterSaturationPageRoutingModule } from './enter-saturation-routing.module';

import { EnterSaturationPage } from './enter-saturation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterSaturationPageRoutingModule
  ],
  declarations: [EnterSaturationPage]
})
export class EnterSaturationPageModule {}
