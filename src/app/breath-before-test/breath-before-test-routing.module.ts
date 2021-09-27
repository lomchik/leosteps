import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreathBeforeTestPage } from './breath-before-test.page';

const routes: Routes = [
  {
    path: '',
    component: BreathBeforeTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreathBeforeTestPageRoutingModule {}
