import { literalMap } from '@angular/compiler';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Respuesta } from 'src/app/models/respuesta';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public myForm: FormGroup
  public registrado: Boolean= false
  public tipoSelect:Boolean = false;
    constructor(private formBuilder: FormBuilder, 
                public usuarioServicio: UsuarioServiceService,
                private router: Router){  

      this.buildForm();

  } 

  public cerrar() {
    const modal = document.getElementById('modalRegistro');
     if (modal) {
         modal.removeAttribute('aria-hidden'); // Elimina el atributo aria-hidden para mostrar el modal
         modal.classList.remove('show'); // Quita la clase 'show' para ocultar el modal
       }
     }

 public redir()    {
     if (this.registrado == true) {
         setTimeout(() => {
           this.router.navigate(['/', 'login'])
             .then(nav => {
               console.log(nav);
             }, err => {
               console.log(err);
             });
         }, 500);
       }
      }


  public register(tipoUsuario:string, nombre: string, apellidos: string,  email: string, contraseña:string,  contraseña2:string){
    let user = this.myForm.value;
    console.log(user);

    if(tipoUsuario == "Elige un tipo de usuario"){
      return
    } else{
      this.tipoSelect = true;
    }
    this.usuarioServicio.register(tipoUsuario, nombre, apellidos, email, contraseña,
      contraseña2).subscribe((resp: Respuesta) => {
        if(resp.error){
          this.registrado = false
        }
        else {
          this.registrado = true   
          resp.datoUsuario    
          this.myForm.reset();  
        }
      })  
  
  }
  private buildForm(){
    const minPassLength = 8;
    this.myForm = this.formBuilder.group({
    tipoUsuario: ["Elige un tipo de usuario", Validators.required],
    name: [, Validators.required],
    lastName: [, Validators.required],
    email: [, [Validators.required, Validators.email]],
    password:[,[Validators.required, Validators.minLength(minPassLength)]],
    password2:[,[Validators.required, this.checkPasswords]]
    })

  }

  private checkPasswords(control: AbstractControl){

    let resultado = {matchPassword: true};
    if(control.parent?.value.password == control.value)
      resultado= null;

    return resultado;
  } 

}


