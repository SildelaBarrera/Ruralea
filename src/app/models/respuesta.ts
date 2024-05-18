import { Evento } from "./evento";
import { Usuario } from "./usuario";
import { Chat } from 'src/app/models/chat';
import { Mensaje } from "./mensaje";


export class Respuesta {

    constructor(public error: boolean, 
                public codigo: number, 
                public mensaje: string, 
                public datoEventos: Evento [] , 
                public datoEvento: Evento, 
                public datoUsuario:Usuario,
                public datoUsuarios: Usuario[],
                public idChats: Number[],
                public datoChats: Chat [],
                public datoMensajes: Mensaje [] ){
                   
                }
    
}

