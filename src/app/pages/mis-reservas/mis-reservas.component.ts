import { Component } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { ReservasService } from 'src/app/shared/reservas.service';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent {

  public reservas: Evento[];

  constructor(public reservaService: ReservasService){}
  

  
}
