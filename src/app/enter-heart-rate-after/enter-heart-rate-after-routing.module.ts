import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterHeartRateAfterPage } from './enter-heart-rate-after.page';

const routes: Routes = [
  {
    path: '',
    component: EnterHeartRateAfterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterHeartRateAfterPageRoutingModule {}
