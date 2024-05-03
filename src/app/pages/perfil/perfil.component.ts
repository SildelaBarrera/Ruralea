import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  public usuario: Usuario
  constructor(public usuarioServicio: UsuarioServiceService){
    this.usuario = this.usuarioServicio.usuario
  }

  public enviar(nuevoNombre:string, nuevoApellido:string, nuevoEmail:string, nuevaFoto:string, nuevaContraseña:string){
    this.usuarioServicio.editar(nuevoNombre, nuevoApellido, nuevoEmail, nuevaFoto, nuevaContraseña)
  }
}


