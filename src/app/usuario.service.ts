import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:5000';  // Asegúrate de que no haya doble barra

  constructor(private http: HttpClient, private router: Router) {}

  // Método para registrar usuarios
  crearUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuario);
  }

  // Método para obtener la lista de usuarios
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`);
  }

  // **Nuevo método para iniciar sesión**
  loginUsuario(nombreUsuario: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { nombreUsuario, password });
  }

  logout() {
    // Eliminar información del usuario (puedes ajustar esto según tu implementación)
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('password');
    sessionStorage.removeItem('usuario');
    
    // Redirigir a la página de inicio de sesión
    this.router.navigate(['/pagprinc']);
  }
}
