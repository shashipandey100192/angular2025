import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landingpange } from './landingpange/landingpange';

const routes: Routes = [
  {
    path:"",
    component:Landingpange
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
