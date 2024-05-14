import { Component } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { Respuesta } from 'src/app/models/respuesta';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { ReservasService } from 'src/app/shared/reservas.service';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent {

  public reservas: Evento[];
  public evento:Evento;
  public proximosEventos: Evento[]; 
  public eventosPasados: Evento[];

  constructor(public reservaService: ReservasService, public eventoService: EventoServiceService, public usuarioServicio: UsuarioServiceService){
    this.reservaService.getAll(this.usuarioServicio.usuarioLogueado.id_usuario).subscribe((resp: Respuesta) =>{
      this.reservas = resp.datoEventos
      console.log(this.reservas);
      this.proximos();
    })
  }
  
  public proximos(){
    const fechaActual = new Date();
    console.log(fechaActual);
    
    this.proximosEventos = this.reservas.filter(evento => new Date(evento.fecha) > fechaActual);
    console.log(this.proximosEventos, 'proximos');
    this.eventosPasados = []
    
  }

  public pasados(){
    const fechaActual = new Date();
  this.eventosPasados = this.reservas.filter(evento => new Date(evento.fecha) < fechaActual);
    console.log(this.eventosPasados, 'pasados');
    this.proximosEventos = []
  }

  public borrarReserva(id_evento:number){  
    console.log(id_evento, 'componente');  
    this.reservaService.borrarReserva(this.usuarioServicio.usuarioLogueado.id_usuario, id_evento).subscribe((resp: Respuesta) =>{
      this.reservaService.getAll(this.usuarioServicio.usuarioLogueado.id_usuario).subscribe((resp: Respuesta) =>{
        this.reservas = resp.datoEventos
        console.log(this.reservas, 'getAll componente');
          this.proximos()
      })
    })
   }

   public borrarPasados(id_evento:number){  
    console.log(id_evento, 'componente');  
    this.reservaService.borrarReserva(this.usuarioServicio.usuarioLogueado.id_usuario, id_evento).subscribe((resp: Respuesta) =>{
      this.reservaService.getAll(this.usuarioServicio.usuarioLogueado.id_usuario).subscribe((resp: Respuesta) =>{
        this.reservas = resp.datoEventos
        console.log(this.reservas, 'getAll componente');
          this.pasados()
      })
    })
   }
}

  

