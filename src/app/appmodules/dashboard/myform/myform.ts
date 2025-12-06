import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-myform',
  imports: [ReactiveFormsModule],
  templateUrl: './myform.html',
  styleUrl: './myform.scss'
})
export class Myform {

myformdata =new FormGroup({
  fname:new FormControl(''),
  lname:new FormControl(''),
});

mysubmit()
{
  console.log(this.myformdata);
}

updatevalue()
{
  this.myformdata.controls.fname.setValue("pppppppp");

}



//-----------------------nested form --------------------

mynestform = new FormGroup({
  fname:new FormControl(''),
  lname:new FormControl(''),
  
  address: new FormGroup({
    city:new FormControl(''),
    phone:new FormControl(''),
  })
})

mygroupform()
{
  console.log(this.mynestform.value)
}


updatenete()
{
  this.mynestform.patchValue({
    fname:"dafsdfsd",
    lname:"kumar",
    address:{
      city:"new delhi",
      phone:"888888"
    }
  })
}


myformreset()
{
  this.mynestform.reset();
}

//--------------------------------------form builder -----------------------------
mybulder:FormGroup

constructor(private one : FormBuilder){
  this.mybulder = one.group({
    fname:[''],
    lname:['']
  })
}

printmyform()
{
  console.log(this.mybulder);
}

//------------------------------event handling --------------------------
y:any;
xyz(x:any)
{
  console.log(x);
  this.y = x.data;
}





}
