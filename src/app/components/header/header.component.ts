import { Component } from '@angular/core';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public usuarioServicio: UsuarioServiceService){}

  public logOut(){
    this.usuarioServicio.logOut()
  }

}
