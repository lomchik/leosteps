import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFeelingPage } from './test-feeling.page';

const routes: Routes = [
  {
    path: '',
    component: TestFeelingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFeelingPageRoutingModule {}
