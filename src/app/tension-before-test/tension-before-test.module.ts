import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TensionBeforeTestPageRoutingModule } from './tension-before-test-routing.module';

import { TensionBeforeTestPage } from './tension-before-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TensionBeforeTestPageRoutingModule
  ],
  declarations: [TensionBeforeTestPage]
})
export class TensionBeforeTestPageModule {}
