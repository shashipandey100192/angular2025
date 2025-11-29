import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parampipe'
})
export class ParampipePipe implements PipeTransform {

  // transform(cvalue:number, ntime:number): any {
  //   return cvalue*ntime
  // }

  transform(cvalue:number, ntime:number): any {
    if(ntime>0)
    {
      return cvalue*ntime
    }
    else
    {
      return cvalue
    }

  }

}
