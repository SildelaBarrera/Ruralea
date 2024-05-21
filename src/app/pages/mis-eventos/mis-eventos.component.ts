import { Component } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from 'src/app/shared/chat.service';

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
    public chatServicio: ChatService,
    private router: Router) {
    this.usuarioServicio.logueado = true;
    this.usuario = this.usuarioServicio.usuarioLogueado;
    this.eventoServicio.getAll(this.usuario.id_usuario).subscribe((resp: Respuesta) => {
      this.misEventos = resp.datoEventos;
      console.log(this.misEventos)
      return this.misEventos;
    })

  }

  ngOnInit(): void {
    if (this.usuario == undefined) {
      this.router.navigate(['/', 'landing'])
        .then(nav => {
          console.log(nav);
        }, err => {
          console.log(err);
        });
    }

  }
  public borrarEvento(id_evento: number) {
    this.eventoServicio.borrarEvento(this.usuario.id_usuario, id_evento).subscribe((resp: Respuesta) => {
      this.eventoServicio.getAll(this.usuarioServicio.usuarioLogueado.id_usuario).subscribe((resp: Respuesta) => {
        this.misEventos = resp.datoEventos
      })
    })
  }

}

