import { Component } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { Respuesta } from 'src/app/models/respuesta';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { ReservasService } from 'src/app/shared/reservas.service';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';

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
  constructor(public eventoService: EventoServiceService, public usuarioServicio: UsuarioServiceService, public reservaService: ReservasService) {       
  }   
 
  ngOnInit(): void {
           
    this.eventoService.getAllActividades(this.categoria).subscribe((resp: Respuesta) =>{
    this.eventos = resp.datoEventos
    console.log(this.eventos);      
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


