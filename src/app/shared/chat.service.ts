import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public url: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  public getUsuarios(id_usuario: number, tipoUsuario: string){
    let nueUrl = this.url + "chat?id_usuario=" + id_usuario + "&tipoUsuario=" + tipoUsuario
    console.log(id_usuario, tipoUsuario, 'servicio');
    
    return this.http.get(nueUrl)
  }
}
