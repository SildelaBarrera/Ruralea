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
  
  public enviar(titulo:string, categoria:string, fecha:string, localizacion: string,
    aforo:number, precio:number, descripcion: string, foto: string){

      this.eventoServicio.add(titulo, categoria, fecha, localizacion,
        aforo, precio, descripcion, foto)
  }

}
