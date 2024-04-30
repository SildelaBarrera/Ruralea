import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public myForm: FormGroup

    constructor(private formBuilder: FormBuilder){  

      this.buildForm();

  } 
  

  public register(){
    const user = this.myForm.value;
    console.log(user);
    
  }

  private buildForm(){
    const minPassLength = 8;
    this.myForm = this.formBuilder.group({
    userType: [, Validators.required],
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


