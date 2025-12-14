import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateformpage',
  imports: [FormsModule],
  templateUrl: './templateformpage.html',
  styleUrl: './templateformpage.scss'
})
export class Templateformpage {

emp={
  fullname:"",
  lastname:""
}

myformsubmit()
{
  console.log(this.emp);
}


mysubmit(form1:NgForm)
{
  if(form1.valid)
  {
    console.log(this.emp);
  }
  else
  {
    console.log("not valid");
  }


}




}
