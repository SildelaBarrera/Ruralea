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
      this.reservas = [
        // new Evento( "TALLER DE CERÁMICA", "Artesanía", "15 de julio de 2024", "Belmonte", "Cuenca", 10, 15, "Demostración de la elaboración de productos tradicionales" + 
        // " y creación de una pieza propia para llevarse a casa. Duración aproximada de 3h.", "https://images.pexels.com/photos/9736884/pexels-photo-9736884.jpeg", 0),
        // new Evento("PASTOR POR UN DÍA", "Artesanía", "20 de mayo de 2024", "Belmonte","Cuenca", 10, 18, "Demostración de las técnicas utilizadas en el pastoreo," + 
        // " cuidado del rebaño y paseo por los caminos colindates. Duración aproximada de 1h.", "https://images.pexels.com/photos/4921193/pexels-photo-4921193.jpeg", 1)
      ]
              
    } 
    public getAll(): Evento[] {
      console.log(this.reservas);      
      return this.reservas    
    }

    public agregarReserva(evento: Evento): void {
      this.reservas.push(evento);
      console.log('pasa evento servicio');
      console.log(this.reservas);
          
    }
    public delete(id:number){
      let aux:Evento[];
      aux = [];
  
      let i:number;
        for (i=0; i< this.reservas.length; i++){
          if (id != this.reservas[i].id){
            aux.push(this.reservas[i])
          }
        }
      this.reservas = aux;
    } 
    
  }

