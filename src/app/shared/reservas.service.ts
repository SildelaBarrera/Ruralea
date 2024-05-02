import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';
import { EventoServiceService } from './evento-service.service';

@Injectable({
  providedIn: 'root'
})


  export class ReservasService {
    public reservas: Evento[] = [];
  
    constructor(public eventos:EventoServiceService) {
      
    }
  
    public agregarReserva(evento: Evento): void {
      this.reservas.push(evento);
      console.log('pasa servicio 1');
      console.log(this.reservas);
      
    }
  
    public obtenerReservas(): Evento[] {
      console.log('pasa servicio 2');
      console.log(this.reservas);
      
      return this.reservas;
    }
  }

