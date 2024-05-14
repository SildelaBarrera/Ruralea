import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Evento} from 'src/app/models/evento';
import { ReservasService } from 'src/app/shared/reservas.service';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() eventoPadre: Evento;
  @Output() deleteReserva = new EventEmitter<number>();
  @Output() remove = new EventEmitter<Number>();
 
  
  public path: string;
  public eventos: Evento [];
  public usuario : Usuario
  public evento: Evento;

  
  constructor(public eventoServicio: EventoServiceService, 
    public usuarioServicio: UsuarioServiceService,
    private route: ActivatedRoute, 
    public reservasServicio: ReservasService, 
    private router: Router) { 

      this.usuario = this.usuarioServicio.usuarioLogueado
      
    }

  ngOnInit(): void {
    this.path = this.route.snapshot.routeConfig.path;  
  }

  public reservarActividad(id_evento: number){
    let userId = this.usuarioServicio.usuarioLogueado.id_usuario;
    
    console.log(userId);
    console.log(id_evento);
      
    this.reservasServicio.agregarReserva(userId, id_evento).subscribe((resp: Respuesta) =>{
    this.eventos = resp.datoEventos;
    
    });
}


 public borrarReserva(id_evento:number){
  this.deleteReserva.emit(id_evento)
    console.log(id_evento);     
    console.log("borrando reserva card componete");  
 }  

 public borrarEvento(id_evento:number){
  this.remove.emit(id_evento)
 }
  
 public editar(titulo:string, categoria:string, fecha:string, municipio: string, provincia:string,
                aforo:number, precio:number, descripcion: string, foto: string){
    
    console.log("pasa por card component", titulo)
    this.eventoServicio.editar(titulo.toUpperCase(), categoria, fecha, municipio, provincia,
      aforo, precio, descripcion, foto, this.eventoPadre.id_evento, this.usuario.id_usuario).subscribe ((resp: Respuesta) => {
      
        if(titulo != ""){
          this.eventoPadre.titulo = titulo.toUpperCase()
        }
        if(municipio != ""){
          this.eventoPadre.municipio = municipio
        }

        this.evento = resp.datoEvento;
        console.log (this.eventoPadre)
        if(resp.error){
          alert(resp.mensaje)
        }
        else{
          alert(resp.mensaje); 
        }
      })
  }

}

