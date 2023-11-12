import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GenerarComidaComponent } from './components/generar-comida/generar-comida.component';
import { BuscarIngredienteComponent } from './components/buscar-ingrediente/buscar-ingrediente.component';
import { EditarComidaComponent } from './components/editar-comida/editar-comida.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'generar-comida', component: GenerarComidaComponent },
  { path: 'buscar-ingrediente', component: BuscarIngredienteComponent },
  { path: 'editar-comida', component: EditarComidaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
