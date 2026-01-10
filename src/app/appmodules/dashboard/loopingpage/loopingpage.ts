import { NgStyle } from '@angular/common';
import { Component,ChangeDetectionStrategy } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';





@Component({
  selector: 'app-loopingpage',
  imports: [NgStyle,FormsModule,MatButtonModule,MatIconModule,MatDividerModule,MatDatepickerModule,MatFormFieldModule,ReactiveFormsModule,MatTabsModule],
  templateUrl: './loopingpage.html',
  styleUrl: './loopingpage.scss',
  providers: [provideNativeDateAdapter()],
    changeDetection: ChangeDetectionStrategy.OnPush,
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


bg1:string="red";
myinputcolor(mycolorelement:any)
{
  console.log(mycolorelement.target.value);
  this.bg1 = mycolorelement.target.value;
}


readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


mycustomtab:string[] = ["one","two","thee","four","five","six","seven"];




}
