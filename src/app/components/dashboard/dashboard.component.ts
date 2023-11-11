import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comida } from 'src/app/models/comida';
import { InformacionNutricional } from 'src/app/models/informacion-nutricional';
import { DashboardService } from 'src/app/services/dashBoard.service';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  informacionNutricional!: Observable<InformacionNutricional>;

  constructor(private route: Router, private dashboardService: DashboardService,private editarService:EditarService) {
    const credentials = { fechaBuscar: '11/11/2023', email: 'juan@email.com' };
    this.informacionNutricional = this.dashboardService.buscar(credentials);
  }



  addComida() {
    this.route.navigate(['generar-comida']);
  }

  editar(comida:Comida){
    this.editarService.addComida(comida);
     this.route.navigate(['editar-comida']);


  }

}
