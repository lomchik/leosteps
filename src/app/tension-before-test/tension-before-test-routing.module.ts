import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TensionBeforeTestPage } from './tension-before-test.page';

const routes: Routes = [
  {
    path: '',
    component: TensionBeforeTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TensionBeforeTestPageRoutingModule {}
