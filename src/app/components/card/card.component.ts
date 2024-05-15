import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Evento} from 'src/app/models/evento';
import { ReservasService } from 'src/app/shared/reservas.service';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ChatService } from 'src/app/shared/chat.service';

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
    public chatServicio: ChatService,
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
        if(categoria != null){
          this.eventoPadre.categoria = categoria
        }
        // if(fecha != null){
        //   this.eventoPadre.fecha = fecha
        // }
        if(municipio != ""){
          this.eventoPadre.municipio = municipio
        }
        if(provincia != ""){
          this.eventoPadre.provincia = provincia
        }
        if(aforo != null){
          this.eventoPadre.aforo = aforo
        }
        if(precio != null){
          this.eventoPadre.precio = precio
        }
        if(descripcion != ""){
          this.eventoPadre.descripcion = descripcion
        }
        if(foto != ""){
          this.eventoPadre.foto = foto
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

  public abrirChat(id_productor : number){
    console.log(this.eventoPadre)
    this.chatServicio.nuevoChat(this.usuarioServicio.usuarioLogueado.id_usuario, id_productor).subscribe((resp: Respuesta) => {
  
      // for (let chat of resp.datoChats) {
      //   console.log("estos son los chats", chat);
      // } 
    })
    
    this.router.navigate(['/', 'chat'])
    .then(nav => {
      console.log(nav); 
    }, err => {
      console.log(err);
    });
  }



}

