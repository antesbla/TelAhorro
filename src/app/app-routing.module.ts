import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';  // Asegúrate de importar el componente Registro
import { LoginComponent } from './login/login.component';  // Asegúrate de importar el componente Login
import { PagprincComponent } from './pagprinc/pagprinc.component';  // Asegúrate de importar el componente Pagprinc
import { TransaccionesComponent } from './transacciones/transacciones.component';  // Asegúrate de importar el componente Transacciones
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
  { path: '', redirectTo: '/pagprinc', pathMatch: 'full' },  // Ruta por defecto
  { path: '**', redirectTo: '/pagprinc' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
