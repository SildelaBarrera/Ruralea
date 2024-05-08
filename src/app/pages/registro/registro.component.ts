import { literalMap } from '@angular/compiler';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Respuesta } from 'src/app/models/respuesta';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public myForm: FormGroup

    constructor(private formBuilder: FormBuilder, 
                public usuarioServicio: UsuarioServiceService){  

      this.buildForm();

  } 

  public register(tipoUsuario:string, nombre: string, apellidos: string,  email: string, contraseña:string,  contraseña2:string){
    let user = this.myForm.value;
    console.log(user);
    this.usuarioServicio.register(tipoUsuario, nombre, apellidos, email, contraseña,
      contraseña2).subscribe((resp: Respuesta) => {
        if(resp.error){
          alert('El usuario ya existe');
        }
        else alert('Usuario registrado correctamente')   
        resp.datoUsuario       
      })
     
  }
  
  private buildForm(){
    const minPassLength = 8;
    this.myForm = this.formBuilder.group({
    tipoUsuario: [, Validators.required],
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


