import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  @ViewChild('mensajes') mensajesDiv: ElementRef;
  public formUsuarios = new FormControl('')
  public usuarios: Usuario []
  public usuario: Usuario
  constructor(public usuarioServicio:UsuarioServiceService, public  chatServicio: ChatService){
      this.getUsuarios()
  }
  enviar(mensaje: string): void {
    // Verifica que el mensaje no esté vacío antes de agregarlo
    if (mensaje.trim() !== '') {
      // Crea un nuevo elemento <p> con el contenido del mensaje
      const nuevoMensaje = document.createElement('p');
      nuevoMensaje.textContent = mensaje;

      // Agrega el nuevo mensaje al div de mensajes
      this.mensajesDiv.nativeElement.appendChild(nuevoMensaje);
        
    }
  }

  public getUsuarios(){
    this.usuario = this.usuarioServicio.usuarioLogueado
    console.log(this.usuario, 'this usuario');    
    this.chatServicio.getUsuarios(this.usuario.id_usuario, this.usuario.tipoUsuario).subscribe((resp:Respuesta)=>
    this.usuarios = resp.datoUsuarios)    
  }
}
