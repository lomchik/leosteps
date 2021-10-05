import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFeelingPageRoutingModule } from './test-feeling-routing.module';

import { TestFeelingPage } from './test-feeling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFeelingPageRoutingModule
  ],
  declarations: [TestFeelingPage]
})
export class TestFeelingPageModule {}
