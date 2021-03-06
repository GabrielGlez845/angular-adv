import { NgModule } from '@angular/core';
import { RouterModule,Routes } from  '@angular/router'
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {path: 'dashboard' , component:DashboardComponent},
      {path: 'progress' , component:ProgressComponent},
      {path: 'grafica1' , component:Grafica1Component},
     { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    ] 
  },
  
  {path: 'register' , component:RegisterComponent},
  {path: 'login' , component:LoginComponent},

 // { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', component: PagenotfoundComponent },
  ];
  

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
