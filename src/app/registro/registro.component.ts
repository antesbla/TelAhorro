import { Component, ViewEncapsulation } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';

/**
 * @description Componente para gestionar el registro de nuevos usuarios.
 */
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RegistroComponent {
  /**
   * @description Objeto del usuario que se va a registrar.
   */
  usuario: Usuario = {
    nombre: '',
    apellidos: '',
    nombreUsuario: '',
    fechaNacimiento: '',
    password: '',
    repetirPassword: ''
  };

  /**
   * @description Mensaje de éxito o error.
   */
  mensaje: string = '';

  /**
   * @description Clase para aplicar estilos al mensaje (rojo = error, verde = éxito).
   */
  mensajeClase: string = '';

  /**
   * @description Constructor del componente. Inyecta el servicio de usuario.
   * @param usuarioService Servicio de usuario para gestionar la creación de nuevos usuarios.
   */
  constructor(private usuarioService: UsuarioService) {}

  /**
   * @description Maneja el evento de envío del formulario de registro.
   */
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
        this.mostrarMensaje('Usuario registrado con éxito.', 'exito');
        this.limpiarFormulario();
      },
      error => {
        this.mostrarMensaje('Hubo un error en el registro.', 'error');
      }   
    );
  }

  /**
   * @description Muestra un mensaje de éxito o error.
   * @param texto El texto del mensaje a mostrar.
   * @param tipo La clase para aplicar al mensaje (error o exito).
   */
  mostrarMensaje(texto: string, tipo: string): void {
    this.mensaje = texto;
    this.mensajeClase = tipo;
    setTimeout(() => this.mensaje = '', 3000); // Ocultar después de 3s
  }

  /**
   * @description Limpia los campos del formulario de registro.
   */
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
