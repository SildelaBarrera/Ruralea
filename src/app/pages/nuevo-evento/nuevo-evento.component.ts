import { Component, Input } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { FormGroup, FormBuilder, Validators, FormControlName} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
 
})
export class NuevoEventoComponent {

  public myForm: FormGroup;
  public usuario: Usuario;
  public eventos: Evento [];
  public nuevoEvento: Boolean = false;
  public tipoSelect:Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public eventoServicio: EventoServiceService,
    public usuarioServicio: UsuarioServiceService,
    private router: Router){
        this.usuarioServicio.logueado;
        this.usuario = this.usuarioServicio.usuarioLogueado
        this.buildForm();
      }

  ngOnInit(): void {
    if (this.usuario == undefined){
      this.router.navigate(['/', 'landing'])
      .then(nav => {
        console.log(nav); 
      }, err => {
        console.log(err);
      });
    }
    
  }
  
  public enviar(titulo:string, categoria:string, fecha:Date, municipio: string, provincia:string,
    aforo:number, precio:number, descripcion: string, foto: string){

      if(categoria == "Elige la categoría"){
        return
      } else{
        this.tipoSelect = true;
      }
      
      let nuevoTitulo: string = titulo.toUpperCase()
      console.log(this.usuario.id_usuario)      
      this.eventoServicio.crear(nuevoTitulo, categoria, fecha, municipio, provincia,
        aforo, precio, descripcion, foto, this.usuario.id_usuario).subscribe((resp: Respuesta) => {
          if(resp.error){
    
            this.nuevoEvento = false
          }
          else 
          // alert('Usuario registrado correctamente')
            this.nuevoEvento = true   
          resp.datoEvento
        }); 
      
      this.myForm.reset();             
  }

  private buildForm(){
    this.myForm = this.formBuilder.group(
      {
        titulo: [, Validators.required],
        categoria: ["Elige la categoría", Validators.required],
        fecha:[, Validators.required],
        descripcion: [,Validators.required],
        municipio: [, Validators.required],
        localidad: [, Validators.required],
        aforo: [, Validators.required],
        precio: [, Validators.required],
        imagen: [, Validators.required]
        
      }
    )
  }

}