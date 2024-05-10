import { Component } from '@angular/core';
import {Evento} from 'src/app/models/evento';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent {

  public evento: Evento;
  public misEventos: Evento[] = [];
  private usuario: Usuario;
  constructor(public eventoServicio: EventoServiceService,
              public usuarioServicio: UsuarioServiceService,
              private router: Router){
    this.usuario = this.usuarioServicio.usuarioLogueado;
    this.eventoServicio.getAll(this.usuario.id_usuario).subscribe((resp:Respuesta) => {
      this.misEventos = resp.datoEventos;
      console.log(this.misEventos)
      return this.misEventos;
      })
     
  }
 
  ngOnInit(): void { 
    if (this.usuario == undefined){
      this.router.navigate(['/', 'landing'])
      .then(nav => {
        console.log(nav); 
      }, err => {
        console.log(err);
      });
    } 
    
    
  }
}

