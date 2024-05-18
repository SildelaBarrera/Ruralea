import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Chat } from 'src/app/models/chat';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { ChatService } from 'src/app/shared/chat.service';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { Mensaje } from 'src/app/models/mensaje';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @ViewChild('scrollMe') private myScrollContainer:ElementRef;
  @ViewChild('mensajes') mensajesDiv: ElementRef;
  
  public mensajes: any[]
  public formUsuarios = new FormControl('')
  public usuarios: Usuario[]
  public usuario: Usuario;
  public chat: Chat;
  public chats: Chat[]
  public mensaje: string
  public id_usuario:number
  public id_chat: number
  public id_chats: Number[]
  public nombre_usuario: string
  constructor(public usuarioServicio: UsuarioServiceService, public chatServicio: ChatService) {
  }
  ngOnInit(): void {
    this.usuario = this.usuarioServicio.usuarioLogueado
    this.id_usuario = this.usuarioServicio.usuarioLogueado.id_usuario;
    this.cargarChats();
  }

  public cargarChats(): void {
    this.chatServicio.getChats(this.usuarioServicio.usuarioLogueado.tipoUsuario, this.id_usuario).subscribe((resp: Respuesta) => {
      console.log(this.id_usuario, 'chat componente');
      this.chats = resp.datoChats

      console.log(resp.datoChats);

    });
  }

  public seleccionarChat(id_chat: number): void {
    console.log (id_chat)
    this.id_chat = id_chat;
    this.cargarMensajes(id_chat);
    console.log(id_chat, 'seleccionar componente');

  }

  public cargarMensajes(id_chat: number): void {
    this.chatServicio.getMensajes(id_chat).subscribe((mensajes: Mensaje []) => {
      
      console.log(mensajes)
      
      this.mensajes = mensajes
      
      console.log(this.mensajes, 'cargar componente');
      return this.mensajes

    });
  }

public enviarMensaje(mensaje: string): void {
    if (this.id_chat && this.mensaje.trim()) {
      this.chatServicio.enviarMensaje(this.id_chat, this.id_usuario, mensaje).subscribe((mensaje: any) => {
        console.log(this.id_usuario, 'enviar componente');

        this.mensajes.push(mensaje);
        this.mensaje = '';
      });
    }
  }

}