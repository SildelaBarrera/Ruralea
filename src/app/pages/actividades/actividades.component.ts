import { Component } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { Respuesta } from 'src/app/models/respuesta';
import { EventoServiceService } from 'src/app/shared/evento-service.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent {
  public evento: Evento;
  public eventos: Evento[]
  public categoria: string = "Ver todas las actividades";
  public provincia: string;
  constructor(public eventoService: EventoServiceService) {
        
  }   

  ngOnInit(){
     "Ver todas las actividades"
    this.eventoService.getAllActividades(this.categoria, this.provincia).subscribe((resp: Respuesta) =>{
      this.eventos = resp.datoEventos
      console.log(this.categoria, 'componente');      
    })
  }

  public find(categoria: string, provincia: string){
    this.eventoService.find(categoria, provincia.toLowerCase()).subscribe((resp:Respuesta) => {
      this.eventos = resp.datoEventos;
      console.log(this.eventos);  
    })
  }
}


