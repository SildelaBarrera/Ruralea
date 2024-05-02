export class Evento {

    constructor(public titulo: string, public categoria: string, public fecha: string, 
        public localizacion: string, public aforo: number, 
        public precio: number, public descripcion: string, public foto: string){ 
    }
}