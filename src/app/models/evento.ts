export class Evento {

    constructor(public titulo: string, public categoria: string, public fecha: string, 
        public municipio: string, public provincia:string, public aforo: number, 
        public precio: number, public descripcion: string, public foto: string, public id: number = 0){ 
    }
}