import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  public usuario: Usuario
  constructor(public user: UsuarioServiceService){
    this.usuario = new Usuario("Consumidor", "Andres", "Redondo", "dharianfenix@gmail.com", "../../../assets/img/fotoPerfil.png", "12345678")
  }

}
