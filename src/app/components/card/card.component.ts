import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Evento} from 'src/app/models/evento';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() eventoPadre: Evento;
  
  @Output() remove = new EventEmitter<Evento>();
  
  constructor(){}
  
  ngOnInit(): void{
  }
}
