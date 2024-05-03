import { Component, ElementRef, ViewChild } from '@angular/core';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @ViewChild('mensajes') mensajesDiv: ElementRef;
  constructor(public usuarioServicio:UsuarioServiceService){

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

}
