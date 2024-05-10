import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';
import { EventoServiceService } from './evento-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


  export class ReservasService {
    public reservas: Evento[] = [];
    public evento: Evento;    
    public url: string = "http://localhost:3000/"
  
    constructor(public eventoService:EventoServiceService, public http: HttpClient) {
      
              
    } 
    public getAll(id_usuario:number){
      let nuevaUrl = this.url + "misReservas?id_usuario="+id_usuario    
      return this.http.get(nuevaUrl)    
    }

    public agregarReserva(id_usuario: number, id_evento: number){
      console.log(id_evento, 'servicio reserva');        
      let nuevaUrl = this.url + "misReservas?id_usuario=" + id_usuario + "&id_evento=" + id_evento;
      console.log('pasa evento servicio');
      return this.http.get(nuevaUrl);
  }

    public borrarReserva(id_usuario:number, id_evento:number){
      let nuevaUrl = this.url + "misReservas?id_usuario=" + id_usuario + "&id_evento=" + id_evento;
      console.log(id_usuario, id_evento,'pasa evento servicio');
      return this.http.delete(nuevaUrl)      
    } 
    
  }

