import { Component, ViewEncapsulation } from '@angular/core';

/**
 * @description Interfaz para definir la estructura de una meta de ahorro.
 */
interface MetaAhorro {
  nombre: string;
  CantidadTotal: number;
  fechaLimite: Date;
  CantidadAhorrada: number;
  progresoAhorro: number;
}

/**
 * @description Componente para gestionar las metas de ahorro.
 */
@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.component.html',
  styleUrls: ['./ahorros.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AhorrosComponent {
  /**
   * @description Nombre de la nueva meta de ahorro.
   */
  nombreMeta: string = '';

  /**
   * @description Cantidad total de la nueva meta de ahorro.
   */
  CantidadTotalMeta: number = 0;

  /**
   * @description Fecha límite de la nueva meta de ahorro.
   */
  fechaLimiteMeta: string = '';

  /**
   * @description Cantidad de ahorro a añadir a una meta existente.
   */
  CantidadAhorro: number = 0;

  /**
   * @description Lista de metas de ahorro.
   */
  metas: MetaAhorro[] = [];

  /**
   * @description Índice de la meta seleccionada para añadir ahorro.
   */
  metaSeleccionada: number = -1;

  /**
   * @description Función para agregar una nueva meta de ahorro.
   */
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

  /**
   * @description Función para agregar ahorro a una meta existente.
   */
  agregarAhorro() {
    if (this.CantidadAhorro > 0 && this.metaSeleccionada >= 0) {
      const meta = this.metas[this.metaSeleccionada];
      meta.CantidadAhorrada += this.CantidadAhorro;
      meta.progresoAhorro = (meta.CantidadAhorrada / meta.CantidadTotal) * 100;

      this.CantidadAhorro = 0;
      this.metaSeleccionada = -1;
    }
  }

  /**
   * @description Función para eliminar una meta de la lista.
   * @param indice Índice de la meta a eliminar.
   */
  eliminarMeta(indice: number) {
    this.metas.splice(indice, 1);
  }

  /**
   * @description Función para limpiar los campos del formulario.
   */
  limpiarFormulario() {
    this.nombreMeta = '';
    this.fechaLimiteMeta = '';
    this.CantidadTotalMeta = 0;
  }
}
