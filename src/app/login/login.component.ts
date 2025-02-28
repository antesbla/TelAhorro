import { Component, ViewEncapsulation } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

/**
 * @description Componente para gestionar el inicio de sesión de usuarios.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent {
  /**
   * @description Nombre de usuario ingresado por el usuario.
   */
  nombreUsuario: string = '';

  /**
   * @description Contraseña ingresada por el usuario.
   */
  password: string = '';

  /**
   * @description Mensaje para mostrar éxito o error.
   */
  mensaje: string = ''; // Mensaje para éxito o error

  /**
   * @description Clase CSS para aplicar estilos al mensaje.
   */
  mensajeClase: string = ''; // Clase CSS para estilos

  /**
   * @description Constructor del componente. Inyecta el servicio de usuario y el enrutador.
   * @param usuarioService Servicio de usuario para gestionar la autenticación.
   * @param router Servicio de enrutamiento de Angular.
   */
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  /**
   * @description Maneja el evento de envío del formulario de inicio de sesión.
   */
  onSubmit(): void {
    if (!this.nombreUsuario.trim() || !this.password.trim()) {
      this.mostrarMensaje('⚠️ Todos los campos son obligatorios', 'error');
      return;
    }
  
    this.usuarioService.loginUsuario(this.nombreUsuario, this.password).subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response); // 🛠️ Depuración
  
        if (response.mensaje === 'Login exitoso') {
          localStorage.setItem('nombre', response.nombre);
          localStorage.setItem('apellidos', response.apellidos);
          localStorage.setItem('nombreUsuario', response.nombreUsuario);
          localStorage.setItem('contraseña', response.password);

          this.router.navigate(['/transacciones']);
        } else {
          this.mostrarMensaje('Credenciales incorrectas', 'error');
        }
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        this.mostrarMensaje('Usuario o contraseña incorrectos', 'error');
      }
    );
  }
  

  /**
   * @description Muestra un mensaje de éxito o error.
   * @param texto El texto del mensaje a mostrar.
   * @param tipo La clase CSS para aplicar al mensaje.
   */
  mostrarMensaje(texto: string, tipo: string): void {
    this.mensaje = texto;
    this.mensajeClase = tipo;
    setTimeout(() => this.mensaje = '', 3000); // Ocultar después de 3s
  }
}
