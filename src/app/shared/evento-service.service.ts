import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';



@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {
  public evento: Evento;
  public eventos:Evento[];
  public eventosEncontrados: Evento [];
  public reservas: Evento[];
  //public url: string = "http://localhost:3000/"
  public url: string = "https://apirest-ruralea.vercel.app/"
  constructor(private http: HttpClient) {
    
  }

  public getAllActividades(categoria: string){
    let urlNueva = this.url+"actividades?categoria="+categoria+"&provincia="
    console.log( 'servicio');
    return this.http.get(urlNueva)
  }
 
  public getAll(id_usuario: number):Observable<Object> {
    console.log(id_usuario) 
    let urlNueva = this.url+"misEventos?id_usuario="+ id_usuario;
    console.log(urlNueva)
    return this.http.get(urlNueva)
  }

  public find(categoria: string, provincia: string){
    let urlNueva = this.url+"actividades?categoria="+categoria+"&provincia="+provincia;
    return this.http.get(urlNueva)
  }

  public crear(titulo:string, categoria:string, fecha:Date, municipio: string, provincia:string,
    aforo:number, precio:number, descripcion:string, foto: string, id_usuario:number): Observable<Object> {
  
      let nuevoEvento = new Evento(titulo, categoria, fecha, municipio, provincia,
      aforo, precio, descripcion, foto, id_usuario);
      console.log(id_usuario)
      console.log(nuevoEvento)
      let urlNueva = this.url+"nuevoEvento"
      return this.http.post(urlNueva, nuevoEvento)
  }
 
  public editar(titulo:string, categoria:string, fecha:string, municipio: string, provincia:string,
    aforo:number, precio:number, descripcion: string, foto: string, id_evento:number, id_usuario: number){

      let eventoModificado = {titulo, categoria, fecha, municipio, provincia, aforo, precio,
        descripcion, foto, id_evento, id_usuario}
      
      let urlNueva = this.url+"misEventos"
      console.log("pasa por el servicio" , eventoModificado)
      return this.http.put(urlNueva, eventoModificado)
    }

  public borrarEvento(id_usuario:number, id_evento: number){
    
    let urlNueva = this.url + "misEventos?id_usuario=" + id_usuario + "&id_evento=" + id_evento;
      console.log(id_usuario, id_evento);
      console.log(urlNueva)
      return this.http.delete(urlNueva)  
    
  }  

}
