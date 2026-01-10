import { Component, OnInit } from '@angular/core';
import { Generalservice } from '../../services/generalservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productlist',
  imports: [RouterLink],
  templateUrl: './productlist.html',
  styleUrl: './productlist.scss'
})
export class Productlist implements OnInit{

constructor(private http:Generalservice){}

productlistdata:any[] =[]

getproduct()
{
  this.http.getapi().subscribe((d:any)=>{
    // console.log(d.products)
    this.productlistdata = d.products;
  })
}

ngOnInit(): void {
  
  this.getproduct();
}



}
