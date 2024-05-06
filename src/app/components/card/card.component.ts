import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Evento} from 'src/app/models/evento';
import { ReservasService } from 'src/app/shared/reservas.service';
import { EventoServiceService } from 'src/app/shared/evento-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() eventoPadre: Evento;
  
  @Output() remove = new EventEmitter<Evento>();
  
  path: string;

  constructor(public eventoServicio: EventoServiceService, private route: ActivatedRoute, public reservas: ReservasService, private router: Router) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.routeConfig.path;
  }

public reservarActividad(evento: Evento): void {
  // Agregar la actividad a la lista de reservas
  this.eventoServicio.agregarReserva(evento);
  console.log('pasa card component', evento);  
}
public enviar(titulo:string, categoria:string, fecha:string, municipio: string, provincia:string,
  aforo:number, precio:number, descripcion: string, foto: string){
    this.eventoServicio.editar(titulo, categoria, fecha, municipio, provincia,
      aforo, precio, descripcion, foto, this.eventoPadre.id)
 }
 public eliminar(){
  this.eventoServicio.delete(this.eventoPadre.id)
 }
}

