import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Evento} from 'src/app/models/evento';
import { ReservasService } from 'src/app/shared/reservas.service';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() eventoPadre: Evento;
  
  @Output() remove = new EventEmitter<Evento>();
  
  public path: string;
  public eventos: Evento [];

  constructor(public usuarioServicio: UsuarioServiceService, public eventoServicio: EventoServiceService, private route: ActivatedRoute, public reservasServicio: ReservasService, private router: Router) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.routeConfig.path;
  }

  public reservarActividad(id_evento: number){
    let userId = this.usuarioServicio.usuarioLogueado.id_usuario;
    
    console.log(userId);
    console.log(id_evento);
      
    this.reservasServicio.agregarReserva(userId, id_evento).subscribe((resp: Respuesta) =>{
    this.eventos = resp.datoEventos;
    
    });
}

public enviar(titulo:string, categoria:string, fecha:Date, municipio: string, provincia:string,
  aforo:number, precio:number, descripcion: string, foto: string){
    this.eventoServicio.editar(titulo, categoria, fecha, municipio, provincia,
      aforo, precio, descripcion, foto, this.eventoPadre.id)
 }
 public eliminar(){
  this.eventoServicio.delete(this.eventoPadre.id)
 }

 public borrarReserva(id_evento:number){
  
  console.log(id_evento, 'componente');  
  this.reservasServicio.borrarReserva(this.usuarioServicio.usuarioLogueado.id_usuario, id_evento).subscribe((resp: Respuesta) =>{
    this.eventos = resp.datoEventos

  })
 }

}

