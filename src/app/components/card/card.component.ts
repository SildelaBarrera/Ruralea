import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Evento} from 'src/app/models/evento';
import { ReservasService } from 'src/app/shared/reservas.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() eventoPadre: Evento;
  
  @Output() remove = new EventEmitter<Evento>();
  
  path: string;

  constructor(private route: ActivatedRoute, public reservas: ReservasService, private router: Router) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.routeConfig.path;
  }
  
 public removeCard(){
   
    this.remove.emit(this.eventoPadre);  

}

public reservarActividad(evento: Evento): void {
  // Agregar la actividad a la lista de reservas
  this.reservas.agregarReserva(evento);
  console.log('pasa card component');
  
  
}
}

