import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestInfoPageRoutingModule } from './test-info-routing.module';

import { TestInfoPage } from './test-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestInfoPageRoutingModule
  ],
  declarations: [TestInfoPage]
})
export class TestInfoPageModule {}
