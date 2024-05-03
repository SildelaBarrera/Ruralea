import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';

@Component({
  selector: 'app-perfil-productor',
  templateUrl: './perfil-productor.component.html',
  styleUrls: ['./perfil-productor.component.css']
})
export class PerfilProductorComponent {
  public usuario: Usuario
  constructor(public usuarioServicio: UsuarioServiceService){
    this.usuario = this.usuarioServicio.usuario2
  }

  public enviar(nuevoNombre:string, nuevoApellido:string, nuevoEmail:string, nuevaFoto:string, nuevaContraseña:string){
    this.usuarioServicio.editarProductor(nuevoNombre, nuevoApellido, nuevoEmail, nuevaFoto, nuevaContraseña)
  }
}



