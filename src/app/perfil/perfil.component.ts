import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

/**
 * @description Componente para gestionar el perfil del usuario.
 */
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'] // Corregir el error tipográfico aquí
})
export class PerfilComponent {
  /**
   * @description Nombre del usuario.
   */
  nombre: string = '';

  /**
   * @description Apellidos del usuario.
   */
  apellidos: string = '';

  /**
   * @description Nombre de usuario.
   */
  nombreUsuario: string = '';

  /**
   * @description Contraseña del usuario.
   */
  password: string = '';

  /**
   * @description Indica si la contraseña es visible.
   */
  isPasswordVisible: boolean = false;

  /**
   * @description Constructor del componente. Inyecta el servicio de usuario.
   * @param usuarioService Servicio de usuario para gestionar la autenticación.
   */
  constructor(private usuarioService: UsuarioService) {}

  /**
   * @description Inicializa el componente cargando los datos del usuario desde el almacenamiento local.
   */
  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.nombre = localStorage.getItem('nombre') || 'Usuario';
      this.apellidos = localStorage.getItem('apellidos') || '';
      this.nombreUsuario = localStorage.getItem('nombreUsuario') || '';
      this.password = localStorage.getItem('contraseña') || '';
    }
  }

  /**
   * @description Alterna la visibilidad de la contraseña.
   */
  mostrarPassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const passwordField: any = document.getElementById('passwordField');
    if (this.isPasswordVisible) {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }

  /**
   * @description Cierra la sesión del usuario.
   */
  cerrarSesion() {
    this.usuarioService.logout();
  }
}
