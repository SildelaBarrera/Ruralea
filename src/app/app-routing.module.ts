import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { MisEventosComponent } from './pages/mis-eventos/mis-eventos.component';


const routes: Routes = [
  {path:"landing", component: LandingPageComponent},
  {path:"registro", component:RegistroComponent},
  {path:"login", component: LoginComponent},
  {path:"misEventos", component: MisEventosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
