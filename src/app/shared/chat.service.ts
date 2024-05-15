import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { UsuarioServiceService } from './usuario-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public url: string = "http://localhost:3000/"
  public chat: Chat
  constructor(private http: HttpClient,
    public usuarioServicio: UsuarioServiceService
    ) { }


//  public getChats(id_usuario1: number){
//     console.log(id_usuario1)
//     let urlNueva = this.url + "misChat";

//     return this.http.get(urlNueva, id_usuario1 )
//  }

 public nuevoChat(id_usuario1:number, id_usuario2:number){
    console.log(id_usuario1, id_usuario2)
    let urlNueva = this.url + "nuevoChat";
    let miembrosChat = {id_usuario1, id_usuario2}
    return this.http.post(urlNueva, miembrosChat)
 }

//  public getMensajes(chat: number){
//     console.log (chat)
//     let urlNueva = this.url + "chat"
    
//     return this.http.get(urlNueva, chat)
//  }

 public enviar(mensaje:string, id_usuarioEmisor: number){
    console.log(mensaje)
    let urlNueva = this.url + "chat"
    let chat: number = this.chat.id_chat
    let datos = {mensaje, id_usuarioEmisor, chat }
    console.log (datos)
    return this.http.post(urlNueva, datos)
 }
}