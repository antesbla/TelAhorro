import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  mostrarCabecera: boolean = true;

  constructor(private router: Router) {
    // Verifica las rutas después de cada navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Aquí excluimos las rutas que no deben mostrar la cabecera
      if (event.urlAfterRedirects === '/login' || event.urlAfterRedirects === '/registro' || event.urlAfterRedirects === '/pagprinc') {
        this.mostrarCabecera = false;
      } else {
        this.mostrarCabecera = true;
      }
    });
  }
}
