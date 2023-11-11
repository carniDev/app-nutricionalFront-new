import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comida } from 'src/app/models/comida';
import { InformacionNutricional } from 'src/app/models/informacion-nutricional';
import { ComidaService } from 'src/app/services/comida.service';
import { DashboardService } from 'src/app/services/dashBoard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  informacionNutricional!: Observable<InformacionNutricional>;

  constructor(private route: Router, private dashboardService: DashboardService,private comidaService:ComidaService) {
    const credentials = { fechaBuscar: '11/11/2023', email: 'juan@email.com' };
    this.informacionNutricional = this.dashboardService.buscar(credentials);
  }



  addComida() {
    console.log(this.informacionNutricional)
    this.route.navigate(['generar-comida']);
  }

  editar(comida:Comida){
    this.comidaService.guardarComida(comida);
     this.route.navigate(['editar-comida']);


  }

}
