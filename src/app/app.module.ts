import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { PagprincComponent } from './pagprinc/pagprinc.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AhorrosComponent } from './ahorros/ahorros.component';
import { PerfilComponent } from './perfil/perfil.component';

/**
 * @description Módulo principal de la aplicación.
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PagprincComponent,
    TransaccionesComponent,
    CabeceraComponent,
    AhorrosComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
