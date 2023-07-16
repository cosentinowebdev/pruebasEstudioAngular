import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';

const routes:Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {path: 'dashboard', component:DashboardComponent},
      {path: 'progress', component:ProgressComponent},
      {path: 'graficas1', component:Graficas1Component},    
      {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
    ]
  },
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  
  {path: '**', component:NopagefoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
