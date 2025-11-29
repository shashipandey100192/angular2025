import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headerpage } from '../../sharescomponents/headerpage/headerpage';
import { Sidebarpage } from '../../sharescomponents/sidebarpage/sidebarpage';
import { Footerpage } from '../../sharescomponents/footerpage/footerpage';


@Component({
  selector: 'app-fullpage',
  imports: [RouterOutlet,Headerpage,Sidebarpage,Footerpage],
  templateUrl: './fullpage.html',
  styleUrl: './fullpage.scss'
})
export class Fullpage {

}
