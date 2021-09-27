import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreathBeforeTestPageRoutingModule } from './breath-before-test-routing.module';

import { BreathBeforeTestPage } from './breath-before-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreathBeforeTestPageRoutingModule
  ],
  declarations: [BreathBeforeTestPage]
})
export class BreathBeforeTestPageModule {}
