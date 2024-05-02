import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Evento} from 'src/app/models/evento';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() eventoPadre: Evento;
  
  @Output() remove = new EventEmitter<Evento>();
  path: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.routeConfig.path;
  }
  
 public removeCard(){
   
    this.remove.emit(this.eventoPadre);  

}
}

