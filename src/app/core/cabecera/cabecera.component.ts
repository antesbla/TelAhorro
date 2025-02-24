import { Component } from '@angular/core';
import { Router, RouterModule, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [RouterModule, CommonModule], // Asegura que CommonModule está aquí
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
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
