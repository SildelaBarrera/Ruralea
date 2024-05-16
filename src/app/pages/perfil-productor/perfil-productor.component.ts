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
  public mailInvalido: Boolean = false;

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
  
  public enviar(input1, input2, input3,
    input4, input5){
      console.log (input1)

      
    // const regExp = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$', 'g')
    // if (!input3.match(regExp)){
    //   console.log("mail invalido")
    //   this.mailInvalido = true;
    //   return;
    // } else{
    //   this.mailInvalido = false;
    // }
    
    this.usuarioServicio.editarProductor(input1, input2, input3, input4, input5, this.usuario.id_usuario).subscribe ((resp: Respuesta) => {
      
      if (input1 != ""){
        this.usuario.nombre = input1
      }
      if (input2 != ""){
        this.usuario.apellidos = input2
      }
      if (input3 != ""){
        this.usuario.email = input3
      }
      if (input4 != ""){
        this.usuario.foto = input4
      }
      if (input5 != ""){
        this.usuario.password = input5
      }
    
      // if(resp.error){
      //   alert(resp.mensaje)
      // }
      // else{
      //   alert(resp.mensaje); 
      // }
    
    })
    console.log(Respuesta)
    
    return(this.usuario)
  }
  desactivar(input1, input2, input3, input4, input5){
    input1.disabled = true;
    input2.disabled = true;
    input3.disabled = true;
    input4.disabled = true;
    input5.disabled = true;
    this.editar = true;
    this.guardar = false;
  }
}



