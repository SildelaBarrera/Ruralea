import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { MisEventosComponent } from './pages/mis-eventos/mis-eventos.component';
import { NuevoEventoComponent } from './pages/nuevo-evento/nuevo-evento.component';
import { MisReservasComponent } from './pages/mis-reservas/mis-reservas.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PerfilProductorComponent } from './pages/perfil-productor/perfil-productor.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './pages/chat/chat.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';


const routes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: 'full' },
  {path:"landing", component: LandingPageComponent},
  {path:"registro", component:RegistroComponent},
  {path:"login", component: LoginComponent},
  {path:"actividades", component: ActividadesComponent},
  {path:"login", component: LoginComponent},
  {path:"misEventos", component: MisEventosComponent},
  {path:"nuevoEvento", component: NuevoEventoComponent},
  {path:"misReservas", component: MisReservasComponent},
  {path:"perfilUsuario", component: PerfilComponent},
  {path:"perfilProductor", component: PerfilProductorComponent},
  {path:"chat", component:ChatComponent},
  {path:"quienesSomos", component: QuienesSomosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
