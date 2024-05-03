import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';
import { EventoServiceService } from './evento-service.service';

@Injectable({
  providedIn: 'root'
})


  export class ReservasService {
    public reservas: Evento[] = [];
    public evento: Evento;
  
    constructor(public eventoService:EventoServiceService) {
      
    } 
    
  }

