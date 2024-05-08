import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { MisEventosComponent } from './pages/mis-eventos/mis-eventos.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { MisReservasComponent } from './pages/mis-reservas/mis-reservas.component';
import { NuevoEventoComponent } from './pages/nuevo-evento/nuevo-evento.component';
import { ChatComponent } from './pages/chat/chat.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { PerfilProductorComponent } from './pages/perfil-productor/perfil-productor.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegistroComponent,
    LoginComponent,
    PerfilComponent,
    MisEventosComponent,
    ActividadesComponent,
    MisReservasComponent,
    NuevoEventoComponent,
    ChatComponent,
    QuienesSomosComponent,
    PerfilProductorComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
