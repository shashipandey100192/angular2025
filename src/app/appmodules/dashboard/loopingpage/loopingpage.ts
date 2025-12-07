import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loopingpage',
  imports: [NgStyle,FormsModule],
  templateUrl: './loopingpage.html',
  styleUrl: './loopingpage.scss'
})
export class Loopingpage {

students:any[] =[
  {name:"ravi",age:40,phone:"8784548"},
  {name:"ravi",age:20,phone:"8784548"},
  {name:"ravi",age:30,phone:"8784548"},
  {name:"ravi",age:44,phone:"8784548"},
  {name:"ravi",age:45,phone:"8784548"},
  {name:"ravi",age:46,phone:"8784548"},
  {name:"ravi",age:47,phone:"8784548"},
];

bg:string= "yellow";

xyz(mycolor:any)
{
  this.bg = mycolor;
}

}
