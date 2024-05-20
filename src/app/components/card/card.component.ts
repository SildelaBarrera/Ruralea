import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import { ReservasService } from 'src/app/shared/reservas.service';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
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
  public eventos: Evento[];
  public usuario: Usuario
  public evento: Evento;
  public categoria: string = "Ver todas las actividades";
  public miChat: any;
  public mensajes: any;

  constructor(
    public eventoServicio: EventoServiceService,
    public chatServicio: ChatService,
    public usuarioServicio: UsuarioServiceService,
    private route: ActivatedRoute,
    public reservasServicio: ReservasService,
    private router: Router) {

    this.usuario = this.usuarioServicio.usuarioLogueado

  }

  ngOnInit(): void {
    this.path = this.route.snapshot.routeConfig.path;
  }

  public actualizarAforo(aforo: number) {
    let nuevoAforo = this.eventoPadre.aforo - aforo;
    console.log(nuevoAforo, aforo, 'aforo card');
    if (nuevoAforo < 0) {
      console.log('No hay plazas disponibles')
    } else {
      this.reservasServicio.actualizarAforo(nuevoAforo, this.eventoPadre.id_evento).subscribe((resp: Respuesta) => {
        console.log(this.eventoPadre.id_evento, 'evento padre id');
        this.eventoPadre.aforo = nuevoAforo
      })
    }
  }

  public actualizarAforoAlBorrar(id_evento: number) {
    this.reservasServicio.actualizarAforoAlBorrar(this.usuarioServicio.usuarioLogueado.id_usuario, id_evento).subscribe((resp: Respuesta) => {
      console.log(this.eventoPadre.id_evento, 'evento padre id');
      console.log('borrado card');

    })
  }


  public reservarActividad(numeroPersonas: number) {
    let userId = this.usuarioServicio.usuarioLogueado.id_usuario;
    console.log(userId);
    console.log(numeroPersonas, this.eventoPadre.aforo);
    if (  numeroPersonas > this.eventoPadre.aforo) {
      alert('No hay plazas')
    } else {
      this.reservasServicio.agregarReserva(userId, this.eventoPadre.id_evento, numeroPersonas).subscribe((resp: Respuesta) => {
        this.eventos = resp.datoEventos;
      });
    }
  }


  public borrarReserva(id_evento: number) {
    this.deleteReserva.emit(id_evento)
    console.log(id_evento);
    console.log("borrando reserva card componete");
  }

  public borrarEvento(id_evento: number) {
    this.remove.emit(id_evento)
  }

  public editar(titulo: string, categoria: string, fecha: string, municipio: string, provincia: string,
    aforo: number, precio: number, descripcion: string, foto: string) {

    console.log("pasa por card component", titulo)
    this.eventoServicio.editar(titulo.toUpperCase(), categoria, fecha, municipio, provincia,
      aforo, precio, descripcion, foto, this.eventoPadre.id_evento, this.usuario.id_usuario).subscribe((resp: Respuesta) => {

        if (titulo != "") {
          this.eventoPadre.titulo = titulo.toUpperCase()
        }
        if (categoria != "") {
          this.eventoPadre.categoria = categoria
        }

        if (municipio != "") {
          this.eventoPadre.municipio = municipio[0].toUpperCase() + municipio.slice(1)
        }
        if (provincia != "") {
          this.eventoPadre.provincia = provincia[0].toUpperCase() + provincia.slice(1)
        }
        if (aforo != null) {
          this.eventoPadre.aforo = aforo
        }
        if (precio != null) {
          this.eventoPadre.precio = precio
        }
        if (descripcion != "") {
          this.eventoPadre.descripcion = descripcion[0].toUpperCase() + descripcion.slice(1)
        }
        if (foto != "") {
          this.eventoPadre.foto = foto
        }
        this.evento = resp.datoEvento;
        console.log(this.eventoPadre)
      })
  }
  public cargarMensajes(id_chat: number): void {
    this.chatServicio.getMensajes(this.usuarioServicio.usuarioLogueado.id_usuario, id_chat).subscribe((resp: Respuesta) => {
      console.log(id_chat, 'cargar mensajes');
      this.mensajes = resp.datoMensajes;
      console.log(this.mensajes);     
      console.log(id_chat, 'cargar componente');
    });
  }
  public abrirChat(id_productor: number, id_evento: number) {
    console.log(this.eventoPadre)
    id_evento = this.eventoPadre.id_evento
    console.log(id_evento, 'cartaaaaaaa');
    this.chatServicio.nuevoChat(this.usuarioServicio.usuarioLogueado.id_usuario, id_productor, id_evento).subscribe((resp: Respuesta) => {
    this.miChat = resp.datoChat
      console.log('mi chat creado', resp.datoChat);
      let mensaje = "Hola, soy " + this.usuarioServicio.usuarioLogueado.nombre + " y me gustaría recibir más información sobre el evento"
      this.chatServicio.enviarMensaje(mensaje, this.usuarioServicio.usuarioLogueado.id_usuario, this.miChat.insertId).subscribe((resp: Respuesta)=>{
        this.cargarMensajes(this.miChat.insertId)
      })
    })

    this.router.navigate(['/', 'chat'])
      .then(nav => {
        console.log(nav);
      }, err => {
        console.log(err);
      });
  }

}

