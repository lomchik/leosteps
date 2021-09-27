import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterHeartRatePage } from './enter-heart-rate.page';

const routes: Routes = [
  {
    path: '',
    component: EnterHeartRatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterHeartRatePageRoutingModule {}
