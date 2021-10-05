import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TensionAfterTestPageRoutingModule } from './tension-after-test-routing.module';

import { TensionAfterTestPage } from './tension-after-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TensionAfterTestPageRoutingModule
  ],
  declarations: [TensionAfterTestPage]
})
export class TensionAfterTestPageModule {}
