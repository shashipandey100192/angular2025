import { Component, OnInit } from '@angular/core';
import { Generalservice } from '../../services/generalservice';
import { RouterLink } from '@angular/router';
import { Parentpage } from '../parentpage/parentpage';

@Component({
  selector: 'app-productlist',
  imports: [RouterLink,Parentpage],
  templateUrl: './productlist.html',
  styleUrl: './productlist.scss'
})
export class Productlist implements OnInit{

constructor(private http:Generalservice){}

productlistdata:any[] =[]

myidlist:any

getproduct()
{
  this.http.getapi().subscribe((d:any)=>{
    // console.log(d.products)
    this.productlistdata = d.products;
    this.myidlist = this.productlistdata.filter((a)=>{
        return a.category=="fragrances";
    });
    console.log(this.productlistdata);


  })
}

ngOnInit(): void {
  
  this.getproduct();
}






}
