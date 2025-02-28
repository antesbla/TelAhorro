import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TransaccionesComponent {
  nombre: string = '';
  apellidos: string = '';
  ultimaConexion: string = '';
  ingresos: { fecha: string; concepto: string; categoria: string; importe: number }[] = [];
  gastos: { fecha: string; concepto: string; categoria: string; importe: number }[] = [];

  ngOnInit() {
    this.ultimaConexion = this.obtenerFechaHoraActual();
    if (typeof window !== 'undefined' && window.localStorage) {
      this.nombre = localStorage.getItem('nombre') || 'Usuario';
      this.apellidos = localStorage.getItem('apellidos') || '';
    }
  }

  obtenerFechaHoraActual(): string {
    const fecha = new Date();
    return fecha.toLocaleString();
  }

  formularioIngresoVisible: boolean = false;
  formularioGastoVisible: boolean = false;
  fechaHoy: string = new Date().toISOString().split('T')[0];

  nuevoIngreso = {
    fecha: '',
    concepto: '',
    categoria: 'Salario',
    importe: 0
  };

  nuevoGasto = {
    fecha: '',
    concepto: '',
    categoria: 'Salario',
    importe: 0
  };

  mostrarFormularioIngreso() {
    this.formularioGastoVisible = false;
    this.formularioIngresoVisible = true;
  }

  cerrarFormularioIngreso() {
    this.formularioIngresoVisible = false;
    this.formularioGastoVisible = false;
  }

  mostrarFormularioGasto() {
    this.formularioIngresoVisible = false;
    this.formularioGastoVisible = true;
  }

  cerrarFormularioGasto() {
    this.formularioIngresoVisible = false;
    this.formularioGastoVisible = false;
  }

  agregarIngreso() {
    if (!this.nuevoIngreso.fecha || !this.nuevoIngreso.concepto || !this.nuevoIngreso.importe) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    this.ingresos.push({
      fecha: this.nuevoIngreso.fecha,
      concepto: this.nuevoIngreso.concepto,
      categoria: this.nuevoIngreso.categoria,
      importe: parseFloat(this.nuevoIngreso.importe.toFixed(2))
    });

    this.nuevoIngreso = { fecha: '', concepto: '', categoria: 'Salario', importe: 0 };
    
    this.cerrarFormularioIngreso();
  }

  agregarGasto() {
    if (!this.nuevoGasto.fecha || !this.nuevoGasto.concepto || !this.nuevoGasto.importe) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    this.gastos.push({
      fecha: this.nuevoGasto.fecha,
      concepto: this.nuevoGasto.concepto,
      categoria: this.nuevoGasto.categoria,
      importe: -Math.abs(parseFloat(this.nuevoGasto.importe.toFixed(2)))
    });

    this.nuevoGasto = { fecha: '', concepto: '', categoria: 'Salario', importe: 0 };
    
    this.cerrarFormularioGasto();
  }

  get saldoTotal(): number {
    const totalIngresos = this.ingresos.reduce((acc, ingreso) => acc + ingreso.importe, 0);
    const totalGastos = this.gastos.reduce((acc, gasto) => acc + gasto.importe, 0);
    return totalIngresos + totalGastos;
  }
}
