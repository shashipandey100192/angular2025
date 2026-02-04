import { Component, OnInit } from '@angular/core';
import { Generalservice } from '../../services/generalservice';
import { UpperCasePipe } from '@angular/common';
import {of,map} from 'rxjs';

@Component({
  selector: 'app-landingpange',
  imports: [UpperCasePipe],
  templateUrl: './landingpange.html',
  styleUrl: './landingpange.scss'
})
export class Landingpange implements OnInit {

  constructor(private server:Generalservice){}

mylocaldata:any="";
xyz:any;

mylocaluser:any;

mydata():void
{
  this.mylocaldata = localStorage.getItem("localdata");
 
  this.xyz = JSON.parse(this.mylocaldata);
  console.log(typeof(this.xyz));
   console.log(this.xyz);
}


ngOnInit(): void {
  
// this.mydata();
this.alllocaldata();

}

alllocaldata()
{
  this.server.getlocaldata().subscribe((d)=>{
    // console.log(d);
    this.mylocaluser = d;
  })
}

deleteuser(myid:any)
{
  this.server.deletedata(myid).subscribe((x)=>{
    console.log(x);
    alert("your data is deleted");
    this.alllocaldata();
  })
}






}
