import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestRunPageRoutingModule } from './test-run-routing.module';

import { TestRunPage } from './test-run.page';
import { MomentModule } from 'ngx-moment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestRunPageRoutingModule,
    MomentModule
  ],
  declarations: [TestRunPage]
})
export class TestRunPageModule {}
