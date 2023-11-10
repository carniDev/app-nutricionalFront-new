import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InformacionNutricional } from 'src/app/models/informacion-nutricional';
import { DashboardService } from 'src/app/services/dashBoard.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  informacionNutricional!: Observable<InformacionNutricional>;

  constructor(private route: Router, private dashboardService: DashboardService) {
    const credentials = { fechaBuscar: '10/11/2023', email: 'juan@email.com' };
    this.informacionNutricional = this.dashboardService.buscar(credentials);
  }



  addComida() {
    this.route.navigate(['generar-comida']);
  }

}
