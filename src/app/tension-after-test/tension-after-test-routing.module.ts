import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TensionAfterTestPage } from './tension-after-test.page';

const routes: Routes = [
  {
    path: '',
    component: TensionAfterTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TensionAfterTestPageRoutingModule {}
