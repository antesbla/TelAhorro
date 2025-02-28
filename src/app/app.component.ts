import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

/**
 * @description Componente raíz de la aplicación.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  /**
   * @description Variable para controlar la visibilidad de la cabecera.
   */
  mostrarCabecera: boolean = true;

  /**
   * @description Constructor del componente. Inyecta el servicio de enrutador.
   * @param router Servicio de enrutamiento de Angular.
   */
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects === '/login' || event.urlAfterRedirects === '/registro' || event.urlAfterRedirects === '/pagprinc') {
        this.mostrarCabecera = false;
      } else {
        this.mostrarCabecera = true;
      }
    });
  }
}
