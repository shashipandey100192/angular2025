import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childpage',
  imports: [],
  templateUrl: './childpage.html',
  styleUrl: './childpage.scss'
})
export class Childpage implements OnInit {

@Input() abc:string = "default value";
@Input() xyz:any;


card:any=[
  {name:"ecard",price:500},
  {name:"ecard1",price:400}

];

ngOnInit(): void {
  
  localStorage.setItem("localdata",JSON.stringify(this.card));


}






}
