import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { Respuesta } from 'src/app/models/respuesta';

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
    
    this.usuario = this.usuarioServicio.usuarioLogueado
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
  
  public enviar(input1: string, input2:string, input3:string, 
    input4:string, input5:string){
      console.log (input1)
    
    // input1.disabled = true;
    // input2.disabled = true;
    // input3.disabled = true;
    // input4.disabled = true;
    // input5.disabled = true;

    this.usuarioServicio.editarProductor(input1, input2, input3, input4, input5, this.usuario.id_usuario).subscribe ((resp: Respuesta) => {
      
      if(resp.error){
        alert(resp.mensaje)
      }
      else{
        alert(resp.mensaje); 
      }
    })
    this.editar = true;
    this.guardar = false;

    console.log(this.usuario)
    return(this.usuario)
  }
}



