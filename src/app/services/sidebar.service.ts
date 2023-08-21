import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {
      titulo: 'Dashboard!!!',
      icono: "mdi mdi-gauge",
      subMenu: [
        {titulo: "Main", url: "/"},
        {titulo: "ProgresBar", url: "progress"},
        {titulo: "Graficas", url: "graficas1"},
        {titulo: "Promesas", url: "promesas-component"}
      ]
    }
  ];

  constructor() { }
}
