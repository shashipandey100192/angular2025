import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

import { Generalservice } from '../../services/generalservice';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-registor',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './registor.html',
  styleUrl: './registor.scss'
})
export class Registor {

constructor(private servive:Generalservice,private myrout:Router){}

myform=new FormGroup({
  email:new FormControl('ee',{}),
  fullname:new FormControl('rr',{}),
  phone:new FormControl('ttt',{}),
  pass:new FormControl('yyy',{}),

})

postdata()
{

  this.servive.addnewuser(this.myform.value).subscribe((d)=>{
    console.log(d);
    alert("registor successfully");
    setTimeout(()=>{
       this.myrout.navigate(['/auth'])
    },2000);
  })
}


}
