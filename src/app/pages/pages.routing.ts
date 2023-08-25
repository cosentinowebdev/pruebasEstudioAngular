import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [
    {
        path:'dashboard',
        component:PagesComponent,
        children:[
          {path: '', component:DashboardComponent,data : {titulo:"Dashboard"}},
          {path: 'progress', component:ProgressComponent,data : {titulo:"Progress"}},
          {path: 'graficas1', component:Graficas1Component,data : {titulo:"Graficas"}},    
          {path: 'account-settings', component:AccountSettingsComponent,data : {titulo:"Acount settings"}},    
          {path: 'promesas-component', component:PromesasComponent,data : {titulo:"Promesas"}},
          {path: 'rxjs-component', component:RxjsComponent,data : {titulo:"RxJs"}}
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}