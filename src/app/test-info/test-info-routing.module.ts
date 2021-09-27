import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestInfoPage } from './test-info.page';

const routes: Routes = [
  {
    path: '',
    component: TestInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestInfoPageRoutingModule {}
