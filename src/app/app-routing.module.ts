import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableauComponent } from './tableau/tableau.component';

const routes: Routes = [
  {
    path: '',
    component: TableauComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
