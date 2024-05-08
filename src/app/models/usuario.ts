export class Usuario {
    
    constructor(public tipoUSuario: string,
        public nombre:string,
        public apellidos:string,
        public email:string,
        public foto:string,
        public password:string,
        public usuario_id:number = 0){

    }     
}
