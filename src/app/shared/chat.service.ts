import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conver } from '../models/conver';
import { Chat } from '../models/chat';
import { UsuarioServiceService } from './usuario-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chat: Chat;
  public miChat_id: number;
  //public url: string = "http://localhost:3000/"
  public url: string = "https://apirest-ruralea.vercel.app/"

  constructor(private http: HttpClient, public usuarioServicio: UsuarioServiceService) { }

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

  public getMensajes(id_usuario:number, id_chat: number) {
    let nuevaUrl = this.url + "chat?id_usuario=" + id_usuario + "&id_chat=" + id_chat 
    return this.http.get(nuevaUrl);
  }

  public enviarMensaje(mensaje: string, id_usuarioEmisor: number, id_chat: number,) {
    let nuevaUrl = this.url + "chat?mensaje=" + mensaje + "&id_usuarioEmisor=" + id_usuarioEmisor + "&id_chat=" + id_chat 
    let body = {mensaje , id_usuarioEmisor, id_chat }
    console.log(mensaje , id_usuarioEmisor, id_chat , 'serviciooooooo');
    
    return this.http.post(nuevaUrl, body);
  }
  public nuevoChat(id_usuario1:number, id_usuario2:number, id_evento:number){
    console.log(id_usuario1, id_usuario2)
    let urlNueva = this.url + "nuevoChat?=" + id_usuario1 + "&id_usuario2=" + id_usuario2 + "&id_evento=" + id_evento;
    let miembrosChat = {id_usuario1, id_usuario2, id_evento}
    console.log('chat creado servicio');
    
    return this.http.post(urlNueva, miembrosChat)
 }

 public borrarChat(id_chat:number){
  let url = this.url + "chat?id_chat=" + id_chat
  return this.http.delete(url)
 }
}
