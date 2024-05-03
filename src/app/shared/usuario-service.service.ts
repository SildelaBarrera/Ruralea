import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  public logueado:boolean = false;
  public userLogueado : Usuario;
  public usuario: Usuario;
  public usuario2: Usuario
  constructor() {
    this.usuario = new Usuario("Consumidor", "Andres", "Redondo", "dharianfenix@gmail.com", "../../../assets/img/fotoPerfil.png", "12345678")
    this.usuario2 = new Usuario("Productor", "Pedro", "Martinez", "dharianfenix@gmail.com", "../../../assets/img/fotoPerfil.png", "12345678")

   }

   public editar(nuevoNombre:string, nuevoApellido:string, nuevoEmail:string, nuevaFoto:string, nuevaContraseña:string){
    console.log(this.usuario.name);
    
    if (nuevoNombre != ""){
      this.usuario.name = nuevoNombre
    }
    if (nuevoApellido != ""){
      this.usuario.lastName = nuevoApellido
    }
    if (nuevoEmail != ""){
      this.usuario.email = nuevoEmail
    }
    if (nuevaFoto != ""){
      this.usuario.photo = nuevaFoto
    }
    if(nuevaContraseña != ""){
      this.usuario.password = nuevaContraseña    
    }
  }
  public editarProductor(nuevoNombre:string, nuevoApellido:string, nuevoEmail:string, nuevaFoto:string, nuevaContraseña:string){
    console.log(this.usuario.name);
    
    if (nuevoNombre != ""){
      this.usuario2.name = nuevoNombre
    }
    if (nuevoApellido != ""){
      this.usuario2.lastName = nuevoApellido
    }
    if (nuevoEmail != ""){
      this.usuario2.email = nuevoEmail
    }
    if (nuevaFoto != ""){
      this.usuario2.photo = nuevaFoto
    }
    if(nuevaContraseña != ""){
      this.usuario2.password = nuevaContraseña    
    }
  }
}
