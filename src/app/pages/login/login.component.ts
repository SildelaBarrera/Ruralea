import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { Respuesta } from 'src/app/models/respuesta';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuarioLogueado: Usuario;
  public mostrarModal: boolean = false

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
    setTimeout(() => {
      this.mostrarModal = false; // Ocultar el modal
    }, 1000);
  }

  public login(email: string, password: string) {
    this.usuarioServicio.login(email, password).subscribe((resp: Respuesta) => {
      if (resp.error) {
        this.usuarioServicio.logueado = false;
        this.mostrarModal = true; // Mostrar modal en caso de error de login
      } else {
        this.usuarioServicio.logueado = true;
        this.usuarioServicio.usuarioLogueado = resp.datoUsuario;

        console.log(this.usuarioServicio.usuarioLogueado);
        console.log("Log in " + this.usuarioServicio.logueado);
        console.log(this.usuarioServicio.usuarioLogueado.tipoUsuario);

        if (this.usuarioServicio.usuarioLogueado.tipoUsuario == "Productor") {
          this.router.navigate(['/', 'misEventos'])
            .then(nav => {
              console.log(nav);
            }, err => {
              console.log(err);
            });
        } else {
          this.router.navigate(['/', 'misReservas'])
            .then(nav => {
              console.log(nav);
            }, err => {
              console.log(err);
            });
        }

        return this.usuarioServicio.usuarioLogueado;
      }
    });
  }


  // public login(email: string, password: string) {
  //   this.usuarioServicio.login(email, password).subscribe((resp: Respuesta) => {
  //     if (resp.error) {
  //       this.usuarioServicio.logueado = false;


  //     }
  //     else {       
  //       this.usuarioServicio.logueado = true;
  //       this.usuarioServicio.usuarioLogueado = resp.datoUsuario

  //       console.log(this.usuarioServicio.usuarioLogueado)
  //       console.log("Log in " + this.usuarioServicio.logueado)
  //       console.log(this.usuarioServicio.usuarioLogueado.tipoUsuario)

  //       if (this.usuarioServicio.usuarioLogueado.tipoUsuario == "Productor") {
  //         setTimeout(() => {
  //           this.router.navigate(['/', 'misEventos'])
  //             .then(nav => {
  //               console.log(nav);
  //             }, err => {
  //               console.log(err);
  //             });
  //         }, 4000);
  //       }
  //       else {
  //         setTimeout(() => {
  //           this.router.navigate(['/', 'misReservas'])
  //             .then(nav => {
  //               console.log(nav);
  //             }, err => {
  //               console.log(err);
  //             });
  //         }, 4000);
  //       }

  //       return this.usuarioServicio.usuarioLogueado


  //     }

  //   })

  // }


}
