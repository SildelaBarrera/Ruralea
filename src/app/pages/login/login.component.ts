import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { Respuesta } from 'src/app/models/respuesta';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuarioLogueado: Usuario;

  constructor(
    public usuarioServicio: UsuarioServiceService,
    private router: Router
  ) {
    this.usuarioLogueado = new Usuario(null, null, null, "", null, "",)

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  public cerrar() {
    const modal = document.getElementById('modalLogin');
    if (modal) {
      modal.removeAttribute('aria-hidden'); // Elimina el atributo aria-hidden para mostrar el modal
      modal.classList.remove('show'); // Quita la clase 'show' para ocultar el modal
    }
  }

  public redir() {
    if (this.usuarioServicio.usuarioLogueado.tipoUsuario == "Productor") {
      setTimeout(() => {
        this.router.navigate(['/', 'misEventos'])
          .then(nav => {
            console.log(nav);
          }, err => {
            console.log(err);
          });
      }, 500);
    }
    else {
      setTimeout(() => {
        this.router.navigate(['/', 'misReservas'])
          .then(nav => {
            console.log(nav);
          }, err => {
            console.log(err);
          });
      }, 500);
    }
  }
  public login(email: string, password: string) {
    this.usuarioServicio.login(email, password).subscribe((resp: Respuesta) => {
      if (resp.error) {
        this.usuarioServicio.logueado = false;
      }
      else {

        this.usuarioServicio.logueado = true;
        this.usuarioServicio.usuarioLogueado = resp.datoUsuario

        console.log(this.usuarioServicio.usuarioLogueado)
        console.log("Log in " + this.usuarioServicio.logueado)
        console.log(this.usuarioServicio.usuarioLogueado.tipoUsuario)
        return this.usuarioServicio.usuarioLogueado
      }
    })
  }
}





