import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MypipePipe } from '../../custom/custompipe/mypipe-pipe';
import { ParampipePipe } from '../../custom/custompipe/parampipe-pipe';

@Component({
  selector: 'app-mainpage',
  imports: [CurrencyPipe,MypipePipe, ParampipePipe],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss'
})
export class Mainpage {

  amount:number = 900;

  a:any = 15;

}
