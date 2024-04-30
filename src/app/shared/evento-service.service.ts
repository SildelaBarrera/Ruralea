import { Injectable } from '@angular/core';
import {Evento} from 'src/app/models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {

  public eventos:Evento[];

  constructor() {
    this.eventos = [
      new Evento("TALLER DE CERÁMICA", "Artesanía", "15 de julio de 2024", "Belmonte, Cuenca", 10, 15, "Demostración de la elaboración de productos tradicionales" + 
      "y creación de una pieza propia para llevarse a casa. Duración aproximada de 3h.", "https://images.pexels.com/photos/9736884/pexels-photo-9736884.jpeg"),
      new Evento("PASTOR POR UN DÍA", "Ganadería", "20 de mayo de 2024", "Arroyo de la Luz, Cáceres", 10, 18, "Demostración de la elaboración de productos tradicionales" + 
      "y creación de una pieza propia para llevarse a casa. Duración aproximada de 3h.", "https://images.pexels.com/photos/9736884/pexels-photo-9736884.jpeg"),
      new Evento("HACER PAN", "Culinario", "20 de mayo de 2024", "Arroyo de la Luz, Cáceres", 10, 18, "Demostración de las técnicas utilizadas" + 
      "en el pastoreo y cuidado del rebaño. Duración aproximada de 1h.", "https://images.pexels.com/photos/4921212/pexels-photo-4921212.jpeg"),
      new Evento("VENDIMIA EN LA VIÑA", "Agrícola", "20 de mayo de 2024", "Arroyo de la Luz, Cáceres", 10, 18, "Demostración de las técnicas utilizadas" + 
      "en el pastoreo y cuidado del rebaño. Duración aproximada de 1h.", "https://images.pexels.com/photos/4921212/pexels-photo-4921212.jpeg")
    ]
  }

  getAll(): Evento[] {
    return (this.eventos)
  }
}
