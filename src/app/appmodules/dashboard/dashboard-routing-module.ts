import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landingpange } from './landingpange/landingpange';
import { Mainpage } from './mainpage/mainpage';
import { Errorpage } from '../sharescomponents/errorpage/errorpage';
import { Myform } from './myform/myform';
import { Loopingpage } from './loopingpage/loopingpage';
import { Templateformpage } from './templateformpage/templateformpage';
import { Productlist } from './productlist/productlist';
import { Productdetails } from './productdetails/productdetails';
import { Interfacepage } from './interfacepage/interfacepage';
import { Parentpage } from './parentpage/parentpage';

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
    path:"api",
    component:Productlist,
    title:"get api"
  },
  {
    path:"detailspage/:id",
    component:Productdetails
  },
  {
    path:"interfacetype",
    component:Interfacepage
  },
  {
    path:"passdata",
    component:Parentpage
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
