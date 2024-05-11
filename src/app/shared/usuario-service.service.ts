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
  public url: string = "http://localhost:3000/"

  constructor(private http:HttpClient) {
   }

   public login(email:string, password:string){

    let urlLogin = this.url + "login";
    let loginDatos = {email, password};
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

  public editarProductor(nombre:string, apellidos:string, email:string, foto:string, password:string, id_usuario:number){
    console.log(nombre);
    console.log(id_usuario)
    
    let urlNueva = this.url + "perfil";
    let perfilEditado = {nombre, apellidos, email, foto, password, id_usuario}
    console.log(perfilEditado)
    return this.http.put(urlNueva, perfilEditado)
  }

  public register(tipoUsuario: string, nombre: string, apellidos: string, email: string, contraseña:string, contraseña2:string){
    let urlRegister = this.url + "registro"
    console.log(urlRegister)
    console.log('pasa por servicio');
    
    let newUser = new Usuario(tipoUsuario, nombre, apellidos, email, "" ,contraseña,)
    console.log(newUser, 'servicio');
    
    return this.http.post(urlRegister, newUser)
    }
  
  public logOut(){
    this.usuarioLogueado = null
    this.logueado = false
    console.log('servicio');
    
  }
}
