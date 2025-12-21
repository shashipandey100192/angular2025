import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-myform',
  imports: [ReactiveFormsModule,NgStyle],
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


//----------------------------------------------------------------------------//

userdata=new FormGroup({
  first:new FormControl("",[Validators.required,Validators.minLength(5)]),
  last:new FormControl("",[Validators.required,Validators.maxLength(10)])
})


myformstate:boolean=false;

myformvalid():void
{
  // console.log(this.userdata.controls);

  // if(this.userdata.controls.first.value=="abc")
  // {
  //   alert("not valid");
  // }
  
  // if(this.userdata.value.first=="abc")
  // {
  //   alert("not valid page");
  // }

  if(this.userdata.valid)
  {
    console.log(this.userdata);

  }
  else
  {
    console.log("form not valiid");
  }



}

mycolor:string="black";

abcd:boolean=true;

myradio(a:any)
{
  this.abcd = true
  console.log(a.target.value);
  console.log(a);
  this.mycolor = a.target.value;
  if(this.mycolor=='orange')
  {
    this.abcd=false;
  }

}














}









