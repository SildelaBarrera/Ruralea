import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {

  public eventos:Evento[];
  public eventosEncontrados: Evento [];
  public reservas: Evento[];
  private url:string = "http://localhost:3000";
  

  constructor(private http: HttpClient) {
  }
 
  public getAll(id_usuario: number):Observable<Object> {
    console.log(id_usuario) 
    let urlNueva = this.url+"/misEventos?id_usuario="+ id_usuario;
    console.log(urlNueva)
    return this.http.get(urlNueva)
  }

  public find(categoria: string, provincia: string): Evento [] {
    let eventosEncontrados: Evento[] = [];    
  
    for (let i = 0; i < this.eventos.length; i++) {
      if (categoria == this.eventos[i].categoria && provincia == this.eventos[i].provincia.toLowerCase()) {
        eventosEncontrados.push(this.eventos[i]);
        console.log(eventosEncontrados, 'if servico');           
        
      } else if (categoria == 'Ver todas las actividades' && provincia == "") {
        // Si se cumplen las condiciones, devolvemos todos los eventos
        eventosEncontrados = this.eventos.slice(); // Copiar todos los eventos
      console.log(eventosEncontrados, 'else if servicio');
      }       
    }   
    return eventosEncontrados.length > 0 ? eventosEncontrados : this.eventos;
  }

  public crear(titulo:string, categoria:string, fecha:string, municipio: string, provincia:string,
    aforo:number, precio:number, descripcion:string, foto: string, id_usuario:number): Observable<Object> {
  
      let nuevoEvento = new Evento(titulo, categoria, fecha, municipio, provincia,
      aforo, precio, descripcion, foto, id_usuario);
      console.log(id_usuario)
      console.log(nuevoEvento)
      let urlNueva = this.url+"/nuevoEvento"
      return this.http.post(urlNueva, nuevoEvento)
  }
 
  public editar(titulo:string, categoria:string, fecha:string, municipio: string, provincia:string,
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

}
