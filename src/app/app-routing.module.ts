import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/example-page/example.module').then(m => m.ExampleModule)
  },
  {
    path: 'error404',
    loadChildren: () => import('./pages/error404/error404.module').then(m => m.Error404Module)
  },
  {
    path: '**', redirectTo: '/error404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
