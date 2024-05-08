import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  public logueado:boolean = false;
  public usuarioLogueado : Usuario;
  public usuario: Usuario;
  public usuario2: Usuario;
  public url: string = "http://localhost:3000/"

  constructor(private http:HttpClient) {
   }

   public login(email:string, contraseña:string){

    let urlLogin = this.url + "login";
    let loginDatos = {email, contraseña};
    return this.http.post(urlLogin, loginDatos)

   }
   public editar(nuevoNombre:string, nuevoApellido:string, nuevoEmail:string, nuevaFoto:string, nuevaContraseña:string){
    console.log(this.usuario.nombre);
    
    if (nuevoNombre != ""){
      this.usuario.nombre = nuevoNombre
    }
    if (nuevoApellido != ""){
      this.usuario.apellidos = nuevoApellido
    }
    if (nuevoEmail != ""){
      this.usuario.email = nuevoEmail
    }
    if (nuevaFoto != ""){
      this.usuario.foto = nuevaFoto
    }
    if(nuevaContraseña != ""){
      this.usuario.password = nuevaContraseña    
    }
  }
  public editarProductor(nuevoNombre:string, nuevoApellido:string, nuevoEmail:string, nuevaFoto:string, nuevaContraseña:string){
    console.log(this.usuario.nombre);
    
    if (nuevoNombre != ""){
      this.usuario2.nombre = nuevoNombre
    }
    if (nuevoApellido != ""){
      this.usuario2.apellidos = nuevoApellido
    }
    if (nuevoEmail != ""){
      this.usuario2.email = nuevoEmail
    }
    if (nuevaFoto != ""){
      this.usuario2.foto = nuevaFoto
    }
    if(nuevaContraseña != ""){
      this.usuario2.password= nuevaContraseña    
    }
  }
}
