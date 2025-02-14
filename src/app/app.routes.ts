import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'pagprinc', loadComponent: () => import('./pages/pagprinc/pagprinc.component').then(m => m.PagprincComponent) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'registro', loadComponent: () => import('./pages/registro/registro.component').then(m => m.RegistroComponent) },
  { path: 'transacciones', loadComponent: () => import('./pages/transacciones/transacciones.component').then(m => m.transaccionesComponent) },
  { path: 'ahorros', loadComponent: () => import('./pages/ahorros/ahorros.component').then(m => m.AhorrosComponent) },
  { path: 'configuracion', loadComponent: () => import('./pages/configuracion/configuracion.component').then(m => m.ConfiguracionComponent) },
  { path: '', redirectTo: 'pagprinc', pathMatch: 'full' },
  { path: '**', redirectTo: 'pagprinc' } // Redirige a la página principal si la ruta no existe
];
