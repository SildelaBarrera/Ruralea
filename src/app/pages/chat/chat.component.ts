import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/shared/chat.service';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @ViewChild('mensajes') mensajesDiv: ElementRef;
  public formUsuarios = new FormControl('')
  public usuarios: Usuario []
  public usuario: Usuario
  public misChats: Chat []
  public mensaje: string
  public mensajes: string[]
  
  constructor(public usuarioServicio:UsuarioServiceService, 
              public  chatServicio: ChatService){
      // this.getUsuarios()
  }
  
  // ngOnInit() { 
  //   this.chatServicio.getChats(this.usuarioServicio.usuarioLogueado.id_usuario).subscribe((resp:Respuesta) => {
  //     if(resp.error){
  //       console.log(resp.error)
  //     }
  //     else{
  //     this.misChats = resp.datoChats;
  //     console.log(this.misChats)
  //     return this.misChats;
  //     }
  //   })
  // }
  enviar(mensaje: string): void {
    
    this.chatServicio.enviar(mensaje, this.usuarioServicio.usuarioLogueado.id_usuario).subscribe((resp: Respuesta) => {

      if(resp.error){
        console.log(resp.error)
      }
      else console.log(resp.mensaje)

      // Verifica que el mensaje no esté vacío antes de agregarlo
    if (mensaje.trim() !== '') {
      // Crea un nuevo elemento <p> con el contenido del mensaje
      const nuevoMensaje = document.createElement('p');
      nuevoMensaje.textContent = mensaje;

      // Agrega el nuevo mensaje al div de mensajes
      this.mensajesDiv.nativeElement.appendChild(nuevoMensaje);
    }

      // this.chatServicio.getMensajes(this.chatServicio.chat.id_chat).subscribe((resp: Respuesta) => {
      // let mensajes = resp.datoMensajes
      //   return mensajes
      // })
    })
  }


  
 

}