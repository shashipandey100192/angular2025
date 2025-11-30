import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MypipePipe } from '../../custom/custompipe/mypipe-pipe';
import { ParampipePipe } from '../../custom/custompipe/parampipe-pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mainpage',
  imports: [CurrencyPipe,MypipePipe, ParampipePipe,NgFor,FormsModule],
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
]



}
