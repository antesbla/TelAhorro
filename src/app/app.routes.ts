import { Routes } from '@angular/router';
import { AhorrosComponent } from './pages/ahorros/ahorros.component';
import { transaccionesComponent } from './pages/transacciones/transacciones.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PagprincComponent } from './pages/pagprinc/pagprinc.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';

export const routes: Routes = [
  { path: 'pagprinc', component: PagprincComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'transacciones', component: transaccionesComponent },
  { path: 'ahorros', component: AhorrosComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: '', redirectTo: 'pagprinc', pathMatch: 'full' },
  { path: '**', redirectTo: 'pagprinc' } 
];
