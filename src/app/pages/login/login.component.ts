import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { Respuesta } from 'src/app/models/respuesta';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuarioLogueado: Usuario;
  

  constructor(
    public usuarioServicio: UsuarioServiceService
  ){
    this.usuarioLogueado = new Usuario(null, null, null, "", null, "",)
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    
  }

  login(email:string,contraseña:string){
    this.usuarioServicio.login(email, contraseña).subscribe((resp: Respuesta) => {
      if(resp.error){
          alert(resp.mensaje);
          this.usuarioServicio.logueado = false;
      }
      else {
          alert(resp.mensaje);
          this.usuarioServicio.logueado = true;
          

          this.usuarioServicio.usuarioLogueado = resp.datoUsuario


          this.usuarioServicio.usuarioLogueado = resp.datoUsuario

          this.usuarioServicio.usuarioLogueado = resp.datoUsuario

          console.log (this.usuarioServicio.usuarioLogueado)
          console.log("Log in " + this.usuarioServicio.logueado)
          
          return this.usuarioServicio.usuarioLogueado
      }
    })
  }
}
