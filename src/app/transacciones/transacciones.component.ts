import { Component, ViewEncapsulation } from '@angular/core';

/**
 * @description Componente para gestionar las transacciones de ingresos y gastos.
 */
@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TransaccionesComponent {
  /**
   * @description Nombre del usuario.
   */
  nombre: string = '';

  /**
   * @description Apellidos del usuario.
   */
  apellidos: string = '';

  /**
   * @description Fecha y hora de la última conexión del usuario.
   */
  ultimaConexion: string = '';

  /**
   * @description Lista de ingresos del usuario.
   */
  ingresos: { fecha: string; concepto: string; categoria: string; importe: number }[] = [];

  /**
   * @description Lista de gastos del usuario.
   */
  gastos: { fecha: string; concepto: string; categoria: string; importe: number }[] = [];

  /**
   * @description Inicializa el componente, estableciendo la última conexión y obteniendo el nombre y apellidos del usuario del almacenamiento local.
   */
  ngOnInit() {
    this.ultimaConexion = this.obtenerFechaHoraActual();
    if (typeof window !== 'undefined' && window.localStorage) {
      this.nombre = localStorage.getItem('nombre') || 'Usuario';
      this.apellidos = localStorage.getItem('apellidos') || '';
    }
  }

  /**
   * @description Obtiene la fecha y hora actual.
   * @returns La fecha y hora actual en formato de cadena.
   */
  obtenerFechaHoraActual(): string {
    const fecha = new Date();
    return fecha.toLocaleString();
  }

  /**
   * @description Indica si el formulario de ingreso está visible.
   */
  formularioIngresoVisible: boolean = false;

  /**
   * @description Indica si el formulario de gasto está visible.
   */
  formularioGastoVisible: boolean = false;

  /**
   * @description Fecha de hoy en formato ISO.
   */
  fechaHoy: string = new Date().toISOString().split('T')[0];

  /**
   * @description Objeto para almacenar los datos de un nuevo ingreso.
   */
  nuevoIngreso = {
    fecha: '',
    concepto: '',
    categoria: 'Salario',
    importe: 0
  };

  /**
   * @description Objeto para almacenar los datos de un nuevo gasto.
   */
  nuevoGasto = {
    fecha: '',
    concepto: '',
    categoria: 'Salario',
    importe: 0
  };

  /**
   * @description Muestra el formulario de ingreso y oculta el de gasto.
   */
  mostrarFormularioIngreso() {
    this.formularioGastoVisible = false;
    this.formularioIngresoVisible = true;
  }

  /**
   * @description Cierra los formularios de ingreso y gasto.
   */
  cerrarFormularioIngreso() {
    this.formularioIngresoVisible = false;
    this.formularioGastoVisible = false;
  }

  /**
   * @description Muestra el formulario de gasto y oculta el de ingreso.
   */
  mostrarFormularioGasto() {
    this.formularioIngresoVisible = false;
    this.formularioGastoVisible = true;
  }

  /**
   * @description Cierra los formularios de ingreso y gasto.
   */
  cerrarFormularioGasto() {
    this.formularioIngresoVisible = false;
    this.formularioGastoVisible = false;
  }

  /**
   * @description Agrega un nuevo ingreso a la lista de ingresos.
   */
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

  /**
   * @description Agrega un nuevo gasto a la lista de gastos.
   */
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

  /**
   * @description Calcula el saldo total disponible sumando los ingresos y restando los gastos.
   * @returns El saldo total disponible.
   */
  get saldoTotal(): number {
    const totalIngresos = this.ingresos.reduce((acc, ingreso) => acc + ingreso.importe, 0);
    const totalGastos = this.gastos.reduce((acc, gasto) => acc + gasto.importe, 0);
    return totalIngresos + totalGastos;
  }
}
