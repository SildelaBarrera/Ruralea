export class Usuario {
    
    constructor(public tipoUsuario: string,
        public nombre:string,
        public apellidos:string,
        public email:string,
        public foto:string,
        public password:string,
        public id_usuario:number = 0){

    }     
}
