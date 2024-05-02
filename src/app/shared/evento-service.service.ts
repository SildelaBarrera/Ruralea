import { Injectable } from '@angular/core';
import {Evento} from 'src/app/models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {

  public eventos:Evento[];

  constructor() {
    this.eventos = [
      new Evento(0,"TALLER DE CERÁMICA", "Artesanía", "15 de julio de 2024", "Belmonte, Cuenca", 10, 15, "Demostración de la elaboración de productos tradicionales" + 
      " y creación de una pieza propia para llevarse a casa. Duración aproximada de 3h.", "https://images.pexels.com/photos/9736884/pexels-photo-9736884.jpeg"),
      new Evento(1,"PASTOR POR UN DÍA", "Ganadería", "20 de mayo de 2024", "Arroyo de la Luz, Cáceres", 10, 18, "Demostración de las técnicas utilizadas en el pastoreo," + 
      " cuidado del rebaño y paseo por los caminos colindates. Duración aproximada de 1h.", "https://images.pexels.com/photos/4921193/pexels-photo-4921193.jpeg"),
      new Evento(2,"ELABORACIÓN DE PAN RÚSTICO", "Culinario", "22 de mayo de 2024", "Budia, Guadalajara", 15, 20, "Demostración de las técnicas utilizadas" + 
      " para la elaboración de repostería casera y elaboración individual de una barra de pan.", "https://images.pexels.com/photos/10009354/pexels-photo-10009354.jpeg"),
      new Evento(3,"VENDIMIA EN LA VIÑA", "Agrícola", "20 de mayo de 2024", "Medellín, Badajoz", 20, 20, "Visita a viñedos para la recogida de uvas y" + 
      " cata didáctica y lúdica para entender la importancia de los aromas del vino.",  "https://images.pexels.com/photos/5529569/pexels-photo-5529569.jpeg")
    ]
  }

  getAll(): Evento[] {
    return (this.eventos)
  }
  add(titulo:string, categoria:string, fecha:string, localizacion: string,
    aforo:number, precio:number, descripcion:string, foto: string): void {
      let indice = this.eventos.length
      let nuevoEvento = new Evento(indice, titulo, categoria, fecha, localizacion,
      aforo, precio, descripcion, foto);
      this.eventos.push(nuevoEvento);
      console.log(nuevoEvento)
      console.log(this.eventos)
  }
  edit(id:number, titulo:string, categoria:string, fecha:string, localizacion: string,
    aforo:number, precio:number, descripcion: string, foto: string){

      if (titulo != ""){
        this.eventos[id].titulo = titulo
      }
      if (categoria != ""){
        this.eventos[id].categoria = categoria
      }
      if (fecha != ""){
        this.eventos[id].fecha = fecha
      }
      if (localizacion != ""){
        this.eventos[id].localizacion = localizacion
      }
      if (aforo.toString() != ""){
        this.eventos[id].aforo = aforo
      }
      if (precio.toString() != ""){
        this.eventos[id].precio = precio
      }
      if (descripcion != ""){
        this.eventos[id].descripcion = descripcion
      }
      if (foto != ""){
        this.eventos[id].foto = foto
      }
    }

  delete(id:number){
    let aux:Evento[];
    aux = [];

    let i:number;
      for (i=0; i< this.eventos.length; i++){
        if (id != this.eventos[i].id){
          aux.push(this.eventos[i])
        }
      }
    this.eventos = aux;
  }
}
