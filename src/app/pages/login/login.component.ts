import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario: Usuario;
  

  constructor(){
    this.usuario = new Usuario()
  }

  onSubmit(form:NgForm){
    console.log(this.usuario);
    console.log(form.value);
    
  }

}
