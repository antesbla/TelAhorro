import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  menuAbierto = false;
  miniMenu = true;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.miniMenu = !this.menuAbierto;
  }
}
