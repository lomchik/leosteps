import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreathAfterTestPage } from './breath-after-test.page';

const routes: Routes = [
  {
    path: '',
    component: BreathAfterTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreathAfterTestPageRoutingModule {}
