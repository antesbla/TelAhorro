import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';
import { Router } from '@angular/router';

/**
 * @description Servicio para gestionar las operaciones relacionadas con los usuarios.
 */
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  /**
   * @description URL de la API para las operaciones relacionadas con los usuarios.
   */
  private apiUrl = 'http://localhost:5000';

  /**
   * @description Constructor del servicio. Inyecta el cliente HTTP y el enrutador.
   * @param http Cliente HTTP de Angular.
   * @param router Servicio de enrutamiento de Angular.
   */
  constructor(private http: HttpClient, private router: Router) {}

  /**
   * @description Método para registrar usuarios.
   * @param usuario Objeto del usuario a registrar.
   * @returns Observable con la respuesta de la API.
   */
  crearUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuario);
  }

  /**
   * @description Método para obtener la lista de usuarios.
   * @returns Observable con la lista de usuarios.
   */
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`);
  }

  /**
   * @description Método para iniciar sesión.
   * @param nombreUsuario Nombre de usuario.
   * @param password Contraseña del usuario.
   * @returns Observable con la respuesta de la API.
   */
  loginUsuario(nombreUsuario: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { nombreUsuario, password });
  }

  /**
   * @description Método para cerrar sesión.
   */
  logout() {
    // Eliminar información del usuario
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('password');
    sessionStorage.removeItem('usuario');
    
    // Redirigir a la página de inicio de sesión
    this.router.navigate(['/pagprinc']);
  }
}
