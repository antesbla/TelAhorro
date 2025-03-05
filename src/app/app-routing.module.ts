import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';  
import { LoginComponent } from './login/login.component';  
import { PagprincComponent } from './pagprinc/pagprinc.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { AhorrosComponent } from './ahorros/ahorros.component';
import { PerfilComponent } from './perfil/perfil.component';

/**
 * @description Configuración de rutas para la aplicación.
 */
const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pagprinc', component: PagprincComponent },
  { path: 'transacciones', component: TransaccionesComponent },
  { path: 'ahorros', component: AhorrosComponent },
  { path: 'perfil', component: PerfilComponent },  
  { path: '', redirectTo: '/pagprinc', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/pagprinc' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
