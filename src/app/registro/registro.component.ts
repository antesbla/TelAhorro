import { Component, ViewEncapsulation } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class RegistroComponent {
  usuario: Usuario = {
    nombre: '',
    apellidos: '',
    nombreUsuario: '',
    fechaNacimiento: '',
    password: '',
    repetirPassword: ''
  };
  mensaje: string = ''; // Mensaje de éxito o error
  mensajeClase: string = ''; // Clase para estilos (rojo = error, verde = éxito)

  constructor(private usuarioService: UsuarioService) {}

  onSubmit(): void {
    if (
      !this.usuario.nombre ||
      !this.usuario.apellidos ||
      !this.usuario.nombreUsuario ||
      !this.usuario.fechaNacimiento ||
      !this.usuario.password ||
      !this.usuario.repetirPassword
    ) {
      this.mostrarMensaje('Todos los campos son obligatorios', 'error');
      return;
    }

    if (this.usuario.password !== this.usuario.repetirPassword) {
      this.mostrarMensaje('Las contraseñas no coinciden.', 'error');
      return;
    }

    this.usuarioService.crearUsuario(this.usuario).subscribe(
      response => {
        this.mostrarMensaje('Usuario registrado con éxito.','exito');
        this.limpiarFormulario();
      },
      error => {
        this.mostrarMensaje('Hubo un error en el registro.', 'error');
      }   
    );
  }
  mostrarMensaje(texto: string, tipo: string): void {
    this.mensaje = texto;
    this.mensajeClase = tipo;
    setTimeout(() => this.mensaje = '', 3000); // Ocultar después de 3s
  }

  limpiarFormulario(): void {
    this.usuario = {
      nombre: '',
      apellidos: '',
      nombreUsuario: '',
      fechaNacimiento: '',
      password: '',
      repetirPassword: ''
    }; 
  }
  
}
