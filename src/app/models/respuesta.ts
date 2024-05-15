import { Evento } from "./evento";
import { Usuario } from "./usuario";



export class Respuesta {

    constructor(public error: boolean, 
                public codigo: number, 
                public mensaje: string, 
                public datoEventos: Evento [] , 
                public datoEvento: Evento, 
                public datoUsuario:Usuario,
                public datoUsuarios: Usuario[] ){
                   
                }
    
}

