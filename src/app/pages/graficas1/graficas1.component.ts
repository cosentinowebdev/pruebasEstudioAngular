import { Component } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html'
})
export class Graficas1Component {
  public labels:string[]=[
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public titles:string="Ventas"
  public data:number[] = [15,34,56];
}
