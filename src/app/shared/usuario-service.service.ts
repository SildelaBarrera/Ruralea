import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  public logueado:boolean = false;
  public userLogueado : Usuario;

  constructor() { }
}
