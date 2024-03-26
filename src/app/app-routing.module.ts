import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';
import { DetailComponent } from './pages/components/detail/detail.component';
import { ErrorComponent } from './pages/components/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'notfound',
    component: NotFoundComponent,
  },
  {
    path: ':country',
    component: DetailComponent,
  },
  {
    path: '**', // wildcard
    redirectTo: 'notfound',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
