import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
@Component({
  selector: 'app-perfil-productor',
  templateUrl: './perfil-productor.component.html',
  styleUrls: ['./perfil-productor.component.css']
})
export class PerfilProductorComponent {

  public usuario: Usuario;
  constructor(public user: UsuarioServiceService){
    this.usuario = new Usuario("Productor", "Sergio", "Lozano", "sergiolozano89@gmail.com", "https://images.pexels.com/photos/4918107/pexels-photo-4918107.jpeg", "12345678")
  }
}
