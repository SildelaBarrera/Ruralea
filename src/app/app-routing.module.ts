import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';


const routes: Routes = [
  {path:"landing", component: LandingPageComponent},
  {path:"registro", component:RegistroComponent},
  {path:"login", component: LoginComponent},
  {path:"actividades", component: ActividadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
