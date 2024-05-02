import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Evento} from 'src/app/models/evento';
import { EventoServiceService } from 'src/app/shared/evento-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() eventoPadre: Evento;
  
  @Output() remove = new EventEmitter<Evento>();
  
  constructor(public eventoServicio: EventoServiceService){}
  
  ngOnInit(): void{
  }
  
 public removeCard(){
   
    this.remove.emit(this.eventoPadre);  

}
public enviar(titulo:string, categoria:string, fecha:string, localizacion: string,
  aforo:number, precio:number, descripcion: string, foto: string){
    this.eventoServicio.edit(this.eventoPadre.id, titulo, categoria, fecha, localizacion,
      aforo, precio, descripcion, foto)
 }
 public eliminar(){
  this.eventoServicio.delete(this.eventoPadre.id)
 }
}

