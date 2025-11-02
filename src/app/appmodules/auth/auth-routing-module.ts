import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Loginpage } from './loginpage/loginpage';
import { Registor } from './registor/registor';

const routes: Routes = [
  {
    path:"",
    component:Loginpage
  },
  {
    path:"registor",
    component:Registor
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
