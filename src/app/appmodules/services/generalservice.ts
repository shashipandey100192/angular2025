import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Generalservice {
  
constructor(private myhttp:HttpClient){}

apipath ="https://dummyjson.com/products";
mylocal ="http://localhost:8800/emp";


getapi():Observable<any>
{
  return this.myhttp.get(this.apipath);
}


prodetails(id:any)
{
  return this.myhttp.get(this.apipath+"/"+id);
}

//create post api

addnewuser(a:any)
{
  return this.myhttp.post(this.mylocal,a);
}

getlocaldata()
{
  return this.myhttp.get(this.mylocal)
}

deletedata(myid:any)
{
  return this.myhttp.delete(this.mylocal+"/"+myid);
}



}
