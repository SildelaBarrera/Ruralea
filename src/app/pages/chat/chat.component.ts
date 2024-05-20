import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Chat } from 'src/app/models/chat';
import { Conver } from 'src/app/models/conver';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { ChatService } from 'src/app/shared/chat.service';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @ViewChild('mensajes') mensajesDiv: ElementRef;
  @ViewChild('messagesContainer', { static: false }) messagesContainer: ElementRef;
  public formUsuarios = new FormControl('')
  public usuarios: Usuario[]
  public usuario: Usuario;
  public chats: Chat[] = []
  public mensajes: Conver[] = []
  public mensaje: string
  public id_usuario: number
  public id_chat: number
  public nombre_usuario: string
  public tipoUsuario: string
py
  constructor(public usuarioServicio: UsuarioServiceService, public chatServicio: ChatService) {

  }
  ngOnInit(): void {
    this.id_usuario = this.usuarioServicio.usuarioLogueado.id_usuario;
    this.tipoUsuario = this.usuarioServicio.usuarioLogueado.tipoUsuario;
    this.cargarChats();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch(err) {
      console.error('Error scrolling to bottom:', err); // Debugging
    }
  }

  public cargarChats(): void {
    this.chatServicio.getChats(this.tipoUsuario, this.id_usuario).subscribe((resp: Respuesta) => {
      console.log(this.id_usuario, 'chat componente');
      this.chats = resp.datoChats
      console.log(resp.datoChats);
    });
  }

  public seleccionarChat(id_chat: number): void {
    this.id_chat = id_chat
    this.cargarMensajes(id_chat);
    console.log(id_chat, 'seleccionar componente');

  }

  public cargarMensajes(id_chat: number): void {
    this.chatServicio.getMensajes(this.id_usuario, id_chat).subscribe((resp: Respuesta) => {
      console.log(id_chat, 'cargar mensajes');
      this.mensajes = resp.datoMensajes;
      console.log(this.mensajes);     
      console.log(id_chat, 'cargar componente');
    });
  }
  
  public enviarMensaje(mensaje: string): void {
    
      this.chatServicio.enviarMensaje(mensaje, this.id_usuario, this.id_chat).subscribe((resp: Respuesta) => {
        console.log(this.id_chat, this.id_usuario, mensaje, 'enviar componente');  
        this.cargarMensajes(this.id_chat)
        console.log(this.id_chat, 'enviandoooo');
        
        this.mensaje = '';
      });
    }
  public borrarChat(id_chat: number){    
    this.chatServicio.borrarChat(id_chat).subscribe((resp:Respuesta) =>{
      this.cargarChats()
    })
  }
  }




