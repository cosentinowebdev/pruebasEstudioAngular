import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  public menuItems:any[]=[];

  constructor(private sidebarService: SidebarService){
    this.menuItems = this.sidebarService.menu;
    console.log(this.menuItems);
  }
}
