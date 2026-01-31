import { Component, Input } from '@angular/core';
import { Childpage } from '../childpage/childpage';

@Component({
  selector: 'app-parentpage',
  imports: [Childpage],
  templateUrl: './parentpage.html',
  styleUrl: './parentpage.scss'
})
export class Parentpage {

 username:string = "rohit singh"; 

infofun():void
{
  alert("wecome to angular");
}
@Input() mydatalist:any[]=[]

}
