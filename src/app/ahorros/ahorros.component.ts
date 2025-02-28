import { Component, ViewEncapsulation } from '@angular/core';

interface MetaAhorro {
  nombre: string;
  CantidadTotal: number;
  fechaLimite: Date;
  CantidadAhorrada: number;
  progresoAhorro: number;
}

@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.component.html',
  styleUrls: ['./ahorros.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class AhorrosComponent {
  // Variables del componente
  nombreMeta: string = '';
  CantidadTotalMeta: number = 0;
  fechaLimiteMeta: string = '';
  CantidadAhorro: number = 0;
  metas: MetaAhorro[] = [];
  metaSeleccionada: number = -1;  // Índice de la meta seleccionada

  // Función para agregar una nueva meta de ahorro
  agregarMeta() {
    if (this.nombreMeta.trim() && this.fechaLimiteMeta && this.CantidadTotalMeta > 0) {
      const fecha = new Date(this.fechaLimiteMeta);
      const nuevaMeta: MetaAhorro = {
        nombre: this.nombreMeta,
        CantidadTotal: this.CantidadTotalMeta,
        fechaLimite: fecha,
        CantidadAhorrada: 0,
        progresoAhorro: 0
      };

      this.metas.push(nuevaMeta);
      this.limpiarFormulario();
    }
  }

  // Función para agregar ahorro a una meta existente
  agregarAhorro() {
    if (this.CantidadAhorro > 0 && this.metaSeleccionada >= 0) {
      const meta = this.metas[this.metaSeleccionada]; // Tomamos la meta seleccionada
      meta.CantidadAhorrada += this.CantidadAhorro;
      meta.progresoAhorro = (meta.CantidadAhorrada / meta.CantidadTotal) * 100;

      // Limpiamos el campo de montoAhorro
      this.CantidadAhorro = 0;
      this.metaSeleccionada = -1; // Resetear selección
    }
  }

  // Función para eliminar una meta de la lista
  eliminarMeta(indice: number) {
    this.metas.splice(indice, 1);
  }

  // Limpiar los campos del formulario
  limpiarFormulario() {
    this.nombreMeta = '';
    this.fechaLimiteMeta = '';
    this.CantidadTotalMeta = 0;
  }
}
