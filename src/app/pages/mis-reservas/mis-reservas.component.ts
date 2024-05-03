import { Component } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { ReservasService } from 'src/app/shared/reservas.service';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent {

  public reservas: Evento[];
  public evento:Evento;

  constructor(public reservaService: ReservasService, public eventoService: EventoServiceService){
    
  }  
  
}
