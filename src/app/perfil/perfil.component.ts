import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  nombre: string = '';
  apellidos: string = '';
  nombreUsuario: string = '';
  password: string = '';
  isPasswordVisible: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.nombre = localStorage.getItem('nombre') || 'Usuario';
      this.apellidos = localStorage.getItem('apellidos') || '';
      this.nombreUsuario = localStorage.getItem('nombreUsuario') || '';
      this.password = localStorage.getItem('contraseña') || '';
    }
  }

  mostrarPassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const passwordField: any = document.getElementById('passwordField');
    if (this.isPasswordVisible) {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }

  cerrarSesion() {
    this.usuarioService.logout();
  }
}
