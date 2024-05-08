import { Usuario } from "./usuario";
import { Evento } from "./evento";

export class Respuesta {

    constructor(public error: boolean, public codigo: number, public mensaje: string, public dato: Usuario){}
}