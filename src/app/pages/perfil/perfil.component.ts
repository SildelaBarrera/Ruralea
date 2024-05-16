import { Component } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  public usuario: Usuario
  public editar: Boolean = true;
  public guardar: Boolean = false;
  constructor(public usuarioServicio: UsuarioServiceService){
    this.usuario = this.usuarioServicio.usuarioLogueado
    console.log(this.usuario, 'constructor');
    
  }
  
  public desactivar(input1, input2, input3, input4, input5){
    input1.disabled = true;
    input2.disabled = true;
    input3.disabled = true;
    input4.disabled = true;
    input5.disabled = true;
    this.editar = true;
    this.guardar = false;    
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
 
  
  public enviar(nombre:string, apellidos:string, email:string, foto:string, password:string, id_usuario:number){
    this.usuarioServicio.editarConsumidor(nombre, apellidos, email, foto, password, id_usuario).subscribe((resp:Respuesta) => {
        if(nombre!= ""){
          this.usuario.nombre = nombre
        }
        if(apellidos!= ""){
          this.usuario.apellidos = apellidos
        }
        if(foto!= ""){
          this.usuario.foto = foto
        }     
        
        if(email!=""){
          this.usuario.email = email
        }
        
        if(resp.error == true){
          
          
          alert(resp.mensaje)
        }
        else{
          alert(resp.mensaje)
          
        }
      })      
  }
}




