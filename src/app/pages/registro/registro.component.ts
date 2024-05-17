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
          // alert('El usuario ya existe');
          this.registrado = false
        }
        else 
        // alert('Usuario registrado correctamente')
          this.registrado = true   
        resp.datoUsuario    

      })
    
      this.myForm.reset();  
      setTimeout(() => {
        this.router.navigate(['/', 'login'])
          .then(nav => {
            console.log(nav);
          }, err => {
            console.log(err);
          });
      }, 4000);
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


