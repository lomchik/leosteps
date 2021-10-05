import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterSaturationAfterPage } from './enter-saturation-after.page';

const routes: Routes = [
  {
    path: '',
    component: EnterSaturationAfterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterSaturationAfterPageRoutingModule {}
