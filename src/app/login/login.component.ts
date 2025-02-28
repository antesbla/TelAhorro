import { Component, ViewEncapsulation } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent {
  nombreUsuario: string = '';
  password: string = '';
  mensaje: string = ''; // Mensaje para éxito o error
  mensajeClase: string = ''; // Clase CSS para estilos

  constructor(private usuarioService: UsuarioService, private router: Router) {}

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
  

  mostrarMensaje(texto: string, tipo: string): void {
    this.mensaje = texto;
    this.mensajeClase = tipo;
    setTimeout(() => this.mensaje = '', 3000); // Ocultar después de 3s
  }
}
