import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MypipePipe } from '../../custom/custompipe/mypipe-pipe';
import { ParampipePipe } from '../../custom/custompipe/parampipe-pipe';
import { FormsModule } from '@angular/forms';
import { ImpurepipePipe } from '../../custom/custompipe/impurepipe-pipe';


@Component({
  selector: 'app-mainpage',
  imports: [CurrencyPipe,MypipePipe, ParampipePipe,NgFor,FormsModule,ImpurepipePipe],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss'
})
export class Mainpage {

  amount:number = 900;

  a:any = 15;

searchdata:any="";
counse:any[] = [
  {name:"web design"},
  {name:"node"},
  {name:"angular"},
  {name:"reactjs"},
  {name:"php"},
  {name:"java"},
];







}
