import { Component } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { EventoServiceService } from 'src/app/shared/evento-service.service';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from 'src/app/shared/usuario-service.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'


@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
})
export class NuevoEventoComponent {

  public myForm: FormGroup;
  public usuario: Usuario;
  constructor(
    private formBuilder: FormBuilder,
    public eventoServicio: EventoServiceService,
    public usuarioServicio: UsuarioServiceService){

        this.usuario = this.usuarioServicio.usuarioLogueado
        this.buildForm();
      }
  
  public enviar(titulo:string, categoria:string, fecha:Date, municipio: string, provincia:string,
    aforo:number, precio:number, descripcion: string, foto: string){

      let nuevoTitulo: string = titulo.toUpperCase()
      console.log(this.usuario.id_usuario)
      
      this.eventoServicio.crear(nuevoTitulo, categoria, fecha, municipio, provincia,
        aforo, precio, descripcion, foto, this.usuario.id_usuario).subscribe((resp: Respuesta) => {

          if (resp.error){
            alert('El evento ya existe.');
          }else{
            alert(resp.mensaje);
          }
        });              
  }

  private buildForm(){

    this.myForm = this.formBuilder.group(
      {
        titulo: [, Validators.required],
        categoria: [, Validators.required],
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
