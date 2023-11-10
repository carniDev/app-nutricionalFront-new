import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GenerarComidaComponent } from './components/generar-comida/generar-comida.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'generar-comida', component:GenerarComidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
