import { Component } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { EventoServiceService } from 'src/app/shared/evento-service.service';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
})
export class NuevoEventoComponent {
    constructor(
      public eventoServicio: EventoServiceService){

      }
  
  public enviar(titulo:string, categoria:string, fecha:string, municipio: string, provincia:string,
    aforo:number, precio:number, descripcion: string, foto: string){

      this.eventoServicio.crear(titulo, categoria, fecha, municipio, provincia,
        aforo, precio, descripcion, foto)

        console.log(this.eventoServicio);
        
  }

}
