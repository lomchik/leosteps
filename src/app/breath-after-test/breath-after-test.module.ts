import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreathAfterTestPageRoutingModule } from './breath-after-test-routing.module';

import { BreathAfterTestPage } from './breath-after-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreathAfterTestPageRoutingModule
  ],
  declarations: [BreathAfterTestPage]
})
export class BreathAfterTestPageModule {}
