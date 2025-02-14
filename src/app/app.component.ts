import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './core/cabecera/cabecera.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabeceraComponent, RouterOutlet, CommonModule],
  template: `
    <app-cabecera *ngIf="mostrarCabecera()"></app-cabecera>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  constructor(private router: Router) {}

  mostrarCabecera(): boolean {
    return this.router.url !== '/login' && this.router.url !== '/registro' && this.router.url !== '/pagprinc';
  }

  mostrarPiePag(): boolean {
    return this.router.url !== '/login' && this.router.url !== '/registro' && this.router.url !== '/pagprinc';
  }
}
