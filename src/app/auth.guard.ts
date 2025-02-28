import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // Verifica si 'localStorage' está disponible y si hay un usuario autenticado
    if (typeof window !== 'undefined' && localStorage.getItem('nombreUsuario')) {
      return true;
    }

    // Si no está autenticado, redirige al login
    this.router.navigate(['/login']);
    return false;

    
  }
}
