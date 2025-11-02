import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [UpperCasePipe,JsonPipe],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {


  user:string = "student name";

  abc()
  {
    alert("welcome to default fucntion");
  }

emp:string[] = ["moahn","rohit","pooja","minku","mohan","khan","royhit"];

emp1:string = "shdkfjkhsd";

xyz:any = [{
  name:"abc",
  age:20
},
{
 name:"abc",
  age:20
},
{
 name:"abc",
  age:20
},
{
 name:"abc",
  age:20
}]


}
