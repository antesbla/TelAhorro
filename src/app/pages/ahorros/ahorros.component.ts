import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { CommonModule } from '@angular/common';  // Importar CommonModule

interface MetaAhorro {
  nombre: string;
  montoTotal: number;
  fechaLimite: Date;
  montoAhorrado: number;
  progresoAhorro: number;
}

@Component({
  selector: 'app-ahorros',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Importar CommonModule además de FormsModule
  templateUrl: './ahorros.component.html',
  styleUrls: ['./ahorros.component.css']
})
export class AhorrosComponent {
  // Variables del componente
  nombreMeta: string = '';
  montoTotalMeta: number = 0;
  fechaLimiteMeta: string = '';
  montoAhorro: number = 0;
  metas: MetaAhorro[] = [];
  metaSeleccionada: number = -1;  // Índice de la meta seleccionada

  // Función para agregar una nueva meta de ahorro
  agregarMeta() {
    if (this.nombreMeta.trim() && this.fechaLimiteMeta && this.montoTotalMeta > 0) {
      const fecha = new Date(this.fechaLimiteMeta);
      const nuevaMeta: MetaAhorro = {
        nombre: this.nombreMeta,
        montoTotal: this.montoTotalMeta,
        fechaLimite: fecha,
        montoAhorrado: 0,
        progresoAhorro: 0
      };

      this.metas.push(nuevaMeta);
      this.limpiarFormulario();
    }
  }

  // Función para agregar ahorro a una meta existente
  agregarAhorro() {
    if (this.montoAhorro > 0 && this.metaSeleccionada >= 0) {
      const meta = this.metas[this.metaSeleccionada]; // Tomamos la meta seleccionada
      meta.montoAhorrado += this.montoAhorro;
      meta.progresoAhorro = (meta.montoAhorrado / meta.montoTotal) * 100;

      // Limpiamos el campo de montoAhorro
      this.montoAhorro = 0;
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
    this.montoTotalMeta = 0;
  }
}
