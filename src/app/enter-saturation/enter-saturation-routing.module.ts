import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterSaturationPage } from './enter-saturation.page';

const routes: Routes = [
  {
    path: '',
    component: EnterSaturationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterSaturationPageRoutingModule {}
