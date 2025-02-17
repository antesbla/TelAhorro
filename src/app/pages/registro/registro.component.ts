import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  
  registro: { nombre: string; apellidos: string; nombreusuario: string; fecna: string; contrasena: string; repetcontrasena: string }[] = [];

  Registro = {
    nombre: '',
    apellidos: '',
    nombreusuario: '',
    fecna: '',
    contrasena: '',
    repetcontrasena: ''
  };

  agregarUsuario() {
    if (!this.Registro.nombre || !this.Registro.apellidos || !this.Registro.nombreusuario || !this.Registro.fecna || !this.Registro.contrasena || !this.Registro.repetcontrasena) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    this.registro.push({
      nombre: this.Registro.nombre,
      apellidos: this.Registro.apellidos,
      nombreusuario: this.Registro.nombreusuario,
      fecna: this.Registro.fecna,
      contrasena: this.Registro.contrasena,
      repetcontrasena: this.Registro.repetcontrasena
    });

    this.Registro = { nombre: '', apellidos: '', nombreusuario: '', fecna: '', contrasena: '', repetcontrasena: '' };
  }
}
