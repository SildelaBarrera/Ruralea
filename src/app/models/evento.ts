export class Evento {

    constructor(public titulo: string, public categoria: string, public fecha: Date, 
        public municipio: string, public provincia:string, public aforo: number, 
        public precio: number, public descripcion: string, public foto: string, public id_usuario: number = 0, public id_evento: number = 0){ 
    }
}