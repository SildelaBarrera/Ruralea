import { Component } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { EventoServiceService } from 'src/app/shared/evento-service.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent {
  public evento: Evento;
  public eventosEncontrados: Evento[]
  constructor(public eventoService: EventoServiceService) {
    
  }  

  public find(categoria: string, localizacion: string){
    
    if (categoria == 'Ver todas las actividades' && localizacion == "") {
      this.eventosEncontrados = this.eventoService.getAll();
      console.log(this.eventosEncontrados, ' componente if', categoria);      
    } else{
      this.eventosEncontrados = this.eventoService.find(categoria, localizacion.toLowerCase());
      console.log(categoria, localizacion, 'else componente');     
    }
    
    //return this.eventosEncontrados;
  }
}

