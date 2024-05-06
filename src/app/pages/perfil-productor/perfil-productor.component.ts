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
  public editar: Boolean = true;
  public guardar: Boolean = false;
  constructor(public usuarioServicio: UsuarioServiceService){
    this.usuario = this.usuarioServicio.usuario2
  }

  public activar(input1, input2, input3, input4, input5){
    input1.disabled = false;
    input2.disabled = false;
    input3.disabled = false;
    input4.disabled = false;
    input5.disabled = false;
    this.editar = false;
    this.guardar = true;
  }
  
  public enviar(nuevoNombre, nuevoApellido, nuevoEmail, nuevaFoto, nuevaContraseña){
    this.usuarioServicio.editarProductor(nuevoNombre.value, nuevoApellido.value, nuevoEmail.value, nuevaFoto.value, nuevaContraseña.value)
    this.editar = true;
    this.guardar = false;
    nuevoNombre.disabled = true;
    nuevoApellido.disabled = true;
    nuevoEmail.disabled = true;
    nuevaFoto.disabled = true;
    nuevaContraseña.disabled = true;
  }
}



