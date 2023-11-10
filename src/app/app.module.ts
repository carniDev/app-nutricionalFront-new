import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GenerarComidaComponent } from './components/generar-comida/generar-comida.component';
import { EditarComidaComponent } from './components/editar-comida/editar-comida.component';
import { BuscarIngredienteComponent } from './components/buscar-ingrediente/buscar-ingrediente.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsComponent } from './components/charts/charts.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GenerarComidaComponent,
    EditarComidaComponent,
    BuscarIngredienteComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    ChartsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
