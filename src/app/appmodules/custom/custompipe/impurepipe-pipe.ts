import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurepipe',
  pure:false
})
export class ImpurepipePipe implements PipeTransform {

  transform(listdata:any[], param:any): any {
    if(!listdata) return []
    if(!param) return listdata;
    return listdata.filter(xyz=>{
      return xyz.name.includes(param)
    }) 
  }

}
