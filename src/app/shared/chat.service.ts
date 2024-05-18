import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { Chat } from 'src/app/models/chat';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public miChat_id: number;
  public url: string = "http://localhost:3000/"

  constructor(private http: HttpClient,
    public usuarioServicio: UsuarioServiceService,
  ) { }

  public getChats(tipoUsuario: string, id_usuario: number) {
    if (this.usuarioServicio.usuarioLogueado.tipoUsuario == 'Consumidor') {
      let nuevaUrl = this.url + "michat?tipoUsuario=" + tipoUsuario + "&id_usuario1=" + id_usuario
      return this.http.get(nuevaUrl);
    } else if (this.usuarioServicio.usuarioLogueado.tipoUsuario == 'Productor') {
      let nuevaUrl = this.url + "michat?tipoUsuario=" + tipoUsuario + "&id_usuario2=" + id_usuario
      return this.http.get(nuevaUrl);
    }
    console.log(id_usuario);

  }

  public getMensajes(id_chat: number){
    let nuevaUrl = this.url + "chat?id_chat=" + id_chat
    return this.http.get(nuevaUrl);
  }

  public enviarMensaje(id_chat: number, id_usuarioEmisor: number, mensaje: string){
    let nuevaUrl = this.url + "hat?id_chat=" + id_chat + "&id_usuario=" + id_usuarioEmisor + "&mensaje=" + mensaje
    let body = {id_chat, id_usuarioEmisor, mensaje}
    return this.http.post(nuevaUrl, body);
  }
}