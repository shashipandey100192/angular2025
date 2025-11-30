import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landingpange } from './landingpange/landingpange';
import { Mainpage } from './mainpage/mainpage';
import { Errorpage } from '../sharescomponents/errorpage/errorpage';
import { Myform } from './myform/myform';

const routes: Routes = [
  {
    path:"",
    component:Landingpange
  },
  {
    path:"main",
    component:Mainpage
  },
  {
    path:"form",
    component:Myform
  },
  {
    path:"**",
    component:Errorpage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
