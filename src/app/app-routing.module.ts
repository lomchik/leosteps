import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/test-info', pathMatch: 'full' },
  {
    path: 'test-info',
    loadChildren: () => import('./test-info/test-info.module').then( m => m.TestInfoPageModule)
  },
  {
    path: 'enter-id',
    loadChildren: () => import('./enter-id/enter-id.module').then( m => m.EnterIdPageModule)
  },
  {
    path: 'enter-heart-rate',
    loadChildren: () => import('./enter-heart-rate/enter-heart-rate.module').then( m => m.EnterHeartRatePageModule)
  },
  {
    path: 'enter-saturation',
    loadChildren: () => import('./enter-saturation/enter-saturation.module').then( m => m.EnterSaturationPageModule)
  },
  {
    path: 'breath-before-test',
    loadChildren: () => import('./breath-before-test/breath-before-test.module').then( m => m.BreathBeforeTestPageModule)
  },
  {
    path: 'tension-before-test',
    loadChildren: () => import('./tension-before-test/tension-before-test.module').then( m => m.TensionBeforeTestPageModule)
  },
  {
    path: 'test-run',
    loadChildren: () => import('./test-run/test-run.module').then( m => m.TestRunPageModule)
  },
  {
    path: 'enter-heart-rate-after',
    loadChildren: () => import('./enter-heart-rate-after/enter-heart-rate-after.module').then( m => m.EnterHeartRateAfterPageModule)
  },
  {
    path: 'enter-saturation-after',
    loadChildren: () => import('./enter-saturation-after/enter-saturation-after.module').then( m => m.EnterSaturationAfterPageModule)
  },
  {
    path: 'breath-after-test',
    loadChildren: () => import('./breath-after-test/breath-after-test.module').then( m => m.BreathAfterTestPageModule)
  },
  {
    path: 'tension-after-test',
    loadChildren: () => import('./tension-after-test/tension-after-test.module').then( m => m.TensionAfterTestPageModule)
  },
  {
    path: 'test-feeling',
    loadChildren: () => import('./test-feeling/test-feeling.module').then( m => m.TestFeelingPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
