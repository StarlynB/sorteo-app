import { NgModule } from '@angular/core';

import { SorteoComponent } from './pages/components/sorteo/sorteo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sorteo',
    component: SorteoComponent
  },
  {
    path: "**",
    redirectTo: 'sorteo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
