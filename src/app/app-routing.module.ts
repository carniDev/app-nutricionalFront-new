import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GenerarComidaComponent } from './components/generar-comida/generar-comida.component';
import { BuscarIngredienteComponent } from './components/buscar-ingrediente/buscar-ingrediente.component';
import { EditarComidaComponent } from './components/editar-comida/editar-comida.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'generar-comida', component:GenerarComidaComponent},
  {path:'buscar-ingrediente',component:BuscarIngredienteComponent},
  {path:'editar-comida',component:EditarComidaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
