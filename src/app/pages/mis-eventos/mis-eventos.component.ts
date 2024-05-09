import { Component } from '@angular/core';
import {Evento} from 'src/app/models/evento';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';


@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent {


  public evento: Evento;
  public misEventos: Evento[];
  private usuario: Usuario;
  constructor(public eventoServicio: EventoServiceService,
              public usuarioServicio: UsuarioServiceService){
    this.usuario = this.usuarioServicio.usuarioLogueado
  }
 
  ngOnInit(): void { 
      console.log(this.usuario.id_usuario)
      
      this.eventoServicio.getAll(this.usuario.id_usuario).subscribe((resp:Respuesta) => {
      this.misEventos = resp.datoEventos;
      console.log(this.misEventos)
      })
    }
  }

