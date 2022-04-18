import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HokiGuard } from './pages/hokiPage/hoki.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'hoki', loadChildren: () => import('./pages/hokiPage/hoki.module').then(m => m.HokiModule), canActivate: [HokiGuard]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
