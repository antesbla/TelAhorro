import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CabeceraComponent {
  rutaActual: string = '';
  menuAbierto = false;
  miniMenu = true;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.miniMenu = !this.menuAbierto;
  }

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rutaActual = this.router.url;
      }
    });
  }

  getColorFondo(): string {
    return this.rutaActual ? '#EEE071' : 'transparent';
  }
}
