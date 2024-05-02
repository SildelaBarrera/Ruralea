export class Usuario {
    
    constructor(public userType: string,
        public name:string,
        public lastName:string,
        public email:string,
        public photo:string,
        public password:string,
        public usuario_id:number = 0){

    }     
}
