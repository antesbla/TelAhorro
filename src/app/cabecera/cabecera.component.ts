import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

/**
 * @description Componente para gestionar la cabecera de la aplicación.
 */
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CabeceraComponent {
  /**
   * @description Ruta actual de la navegación.
   */
  rutaActual: string = '';

  /**
   * @description Indica si el menú lateral está abierto.
   */
  menuAbierto = false;

  /**
   * @description Indica si el menú lateral está en modo mini.
   */
  miniMenu = true;

  /**
   * @description Alterna el estado del menú lateral entre abierto y cerrado.
   */
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.miniMenu = !this.menuAbierto;
  }

  /**
   * @description Constructor del componente. Suscribe a los eventos de navegación para actualizar la ruta actual.
   * @param router Servicio de enrutamiento de Angular.
   */
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rutaActual = this.router.url;
      }
    });
  }
}
