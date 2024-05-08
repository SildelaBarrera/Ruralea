import { Evento } from "./evento";
import { Usuario } from "./usuario";



export class Respuesta {

    constructor(public error: boolean, 
                public codigo: number, 
                public message: string, 
                public dataEventos: Evento [] , 
                public dataEvento: Evento, 
                public dataUsuario:Usuario){
                    
                }
    
}

