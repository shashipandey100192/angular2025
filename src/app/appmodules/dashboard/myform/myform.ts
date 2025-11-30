import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-myform',
  imports: [ReactiveFormsModule],
  templateUrl: './myform.html',
  styleUrl: './myform.scss'
})
export class Myform {

myformdata =new FormGroup({
  fname:new FormControl(),
  lname:new FormControl(),
});

mysubmit()
{
  console.log(this.myformdata.value);
}





}
