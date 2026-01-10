import { Component } from '@angular/core';
import { Mytable } from '../../cusinterface/datatype';

@Component({
  selector: 'app-interfacepage',
  imports: [],
  templateUrl: './interfacepage.html',
  styleUrl: './interfacepage.scss'
})
export class Interfacepage {




mytable:Mytable[] = [
  {
    sno:50,
    product:"compouter",
  }

]



}
