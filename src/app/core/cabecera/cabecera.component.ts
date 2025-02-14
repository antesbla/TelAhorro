import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  menuAbierto = false;
  miniMenu = true; // Modo mini por defecto

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.miniMenu = !this.menuAbierto; // Desactiva mini cuando se expande el menú
  }
}
