import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Generalservice } from '../../services/generalservice';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  imports: [CurrencyPipe,NgClass],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.scss'
})
export class Productdetails implements OnInit {

myid:any;
products:any;
pricecondition:boolean = false;
// this.myid= this.ActivatedRoute.snapshop.paramMap.get('id');

constructor(private myrout:ActivatedRoute,private myservice:Generalservice){

this.myrout.paramMap.subscribe((a)=>{
  console.log(a.get('id'))
  this.myid = a.get('id');
})
}

productdetailspage()
{
this.myservice.prodetails(this.myid).subscribe((d)=>{
  console.log(d);
  this.products = d;
  if(this.products.price>=70)
  {
    this.pricecondition = true;
  }
})
}

ngOnInit(): void {
  
  this.productdetailspage()

}


a:any
mybtn(obj:any)
{
  // alert("welcome to data passing"+obj);
  console.log(obj.clientX);
  this.a = obj.clientX;
}











}
