import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landingpange } from './landingpange/landingpange';
import { Mainpage } from './mainpage/mainpage';
import { Errorpage } from '../sharescomponents/errorpage/errorpage';
import { Myform } from './myform/myform';
import { Loopingpage } from './loopingpage/loopingpage';
import { Templateformpage } from './templateformpage/templateformpage';

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
    component:Myform,
    title:"reactform"
  },
  {
    path:"congrolflow",
    component:Loopingpage,
    
  },
  {
    path:"templateform",
    component:Templateformpage,
    title:"templae"
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
