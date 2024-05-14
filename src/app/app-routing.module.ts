import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorteoComponent } from './pages/components/sorteo/sorteo.component';

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
