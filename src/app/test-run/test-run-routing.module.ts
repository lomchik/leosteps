import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestRunPage } from './test-run.page';

const routes: Routes = [
  {
    path: '',
    component: TestRunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRunPageRoutingModule {}
