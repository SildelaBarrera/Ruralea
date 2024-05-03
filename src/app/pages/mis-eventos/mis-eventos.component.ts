import { Component } from '@angular/core';
import {Evento} from 'src/app/models/evento';
import { EventoServiceService } from 'src/app/shared/evento-service.service';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent {


  public evento: Evento;
  constructor(public eventoService: EventoServiceService) {

  }
 
}
