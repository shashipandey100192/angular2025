import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Generalservice {
  
constructor(private myhttp:HttpClient){}

apipath ="https://dummyjson.com/products";


getapi()
{
  return this.myhttp.get(this.apipath);
}


}
