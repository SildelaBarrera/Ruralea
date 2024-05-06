import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {

  public eventos:Evento[];
  public eventosEncontrados: Evento [];
  public reservas: Evento[];

  constructor() {
    this.eventos = [
      new Evento( "TALLER DE CERÁMICA", "Artesanía", "15 de julio de 2024", "Belmonte", "Cuenca", 10, 15, "Demostración de la elaboración de productos tradicionales" + 
      " y creación de una pieza propia para llevarse a casa. Duración aproximada de 3h.", "https://images.pexels.com/photos/9736884/pexels-photo-9736884.jpeg", 0),
      new Evento("PASTOR POR UN DÍA", "Artesanía", "20 de mayo de 2024", "Belmonte","Cuenca", 10, 18, "Demostración de las técnicas utilizadas en el pastoreo," + 
      " cuidado del rebaño y paseo por los caminos colindates. Duración aproximada de 1h.", "https://images.pexels.com/photos/4921193/pexels-photo-4921193.jpeg", 1),
      new Evento("ELABORACIÓN DE PAN RÚSTICO", "Culinario", "22 de mayo de 2024", "Budia", "Guadalajara", 15, 20, "Demostración de las técnicas utilizadas" + 
      " para la elaboración de repostería casera y elaboración individual de una barra de pan.", "https://images.pexels.com/photos/10009354/pexels-photo-10009354.jpeg", 2),
      new Evento("VENDIMIA EN LA VIÑA", "Agrícola", "20 de mayo de 2024", "Medellín", "Badajoz", 20, 20, "Visita a viñedos para la recogida de uvas y" + 
      " cata didáctica y lúdica para entender la importancia de los aromas del vino.",  "https://images.pexels.com/photos/5529569/pexels-photo-5529569.jpeg", 3)
    ]
  }

  public getAll(): Evento[] {
       
    return this.eventos    
  }

  public find(categoria: string, provincia: string): Evento [] {
    let eventosEncontrados: Evento[] = [];
    
  
    for (let i = 0; i < this.eventos.length; i++) {
      if (categoria == this.eventos[i].categoria && provincia == this.eventos[i].provincia.toLowerCase()) {
        eventosEncontrados.push(this.eventos[i]);
        console.log(eventosEncontrados, 'servico');           
        
      } else if (categoria == 'Ver todas las actividades' && provincia == "") {
        // Si se cumplen las condiciones, devolvemos todos los eventos
        eventosEncontrados = this.eventos.slice(); // Copiar todos los eventos
      console.log(eventosEncontrados, 'servicio');
      }
      
    }   
    return eventosEncontrados.length > 0 ? eventosEncontrados : this.eventos;
  }
  
  public add(titulo:string, categoria:string, fecha:string, municipio: string, provincia:string,
    aforo:number, precio:number, descripcion:string, foto: string): void {
      let indice = this.eventos.length
      let nuevoEvento = new Evento(titulo, categoria, fecha, municipio, provincia,
      aforo, precio, descripcion, foto, indice);
      this.eventos.push(nuevoEvento);
      console.log(nuevoEvento)
      console.log(this.eventos)
  }
  public edit(titulo:string, categoria:string, fecha:string, municipio: string, provincia:string,
    aforo:number, precio:number, descripcion: string, foto: string, id:number){

      if (titulo != ""){
        this.eventos[id].titulo = titulo
      }
      if (categoria != ""){
        this.eventos[id].categoria = categoria
      }
      if (fecha != ""){
        this.eventos[id].fecha = fecha
      }
      if (municipio != ""){
        this.eventos[id].municipio = municipio
      }
      if(provincia != ""){
        this.eventos[id].provincia = provincia
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

  public delete(id:number){
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

//   public obtenerReservas(): Evento[] {
//     console.log('pasa servicio 2');
//     console.log(this.reservas);
    
//     return this.reservas;
//   }
}
