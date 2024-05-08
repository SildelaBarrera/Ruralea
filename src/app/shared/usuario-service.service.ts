import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  private url:string = "localhost:3000/"
  public logueado:boolean = false;
  public userLogueado : Usuario;
  public usuario: Usuario;
  public usuario2: Usuario
  constructor(private http: HttpClient) {
    this.usuario = new Usuario("Consumidor", "Andres", "Redondo", "dharianfenix@gmail.com", "../../../assets/img/fotoPerfil.png", "12345678")
    this.usuario2 = new Usuario("Productor", "Ismael", "Lozano Vega", "ismaellozano89@gmail.com", "https://images.pexels.com/photos/4918155/pexels-photo-4918155.jpeg", "12345678")
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

  public register(tipoUsuario: string, nombre: string, apellidos: string, email: string, contraseña:string, contraseña2:string){
    let urlRegister = this.url + "registro"
    console.log(urlRegister)
    console.log('pasa por servicio');
    
    let newUser = new Usuario(tipoUsuario, nombre, apellidos, email, contraseña, contraseña2)
    return this.http.post(urlRegister, newUser)
    }
}
