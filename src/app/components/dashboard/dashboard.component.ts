import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comida } from 'src/app/models/comida';
import { InformacionNutricional } from 'src/app/models/informacion-nutricional';
import { AuthService } from 'src/app/services/auth.service';
import { ComidaService } from 'src/app/services/comida.service';
import { DashboardService } from 'src/app/services/dashBoard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  informacionNutricional!: Observable<InformacionNutricional>;
  tipoComida:string[];
  email: string = "juan2@email.com";
  constructor(private route: Router, private dashboardService: DashboardService, private comidaService: ComidaService,private auth:AuthService) {
this.tipoComida= [];
  }

  ngOnInit(): void {
    this.obtenerEmail();
    const credentials = {
      fechaBuscar: this.obtenerFechaHoyFormatoDDMMYYYY(), email:
        this.email
    };
    this.informacionNutricional = this.dashboardService.buscar(credentials);
    this.addTipoComida();
    
  }
  ngAfterViewInit(): void {
    console.log(this.tipoComida)
    

   
  }

  obtenerEmail() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      if (decodedToken && decodedToken.email) {
        console.log(decodedToken.sub)
        this.email = decodedToken.sub;
      }

    }
  }


  addComida() {
    this.comidaService.setEmail(this.email);
    this.comidaService.setTipoComidaDisponible(this.tipoComida);
    this.route.navigate(['generar-comida']);
  }

  editar(comida: Comida) {
    comida.email=this.email;
    this.comidaService.guardarComida(comida);
    this.route.navigate(['editar-comida']);


  }

  private obtenerFechaHoyFormatoDDMMYYYY(): string {
    const hoy = new Date();
    const dia = `0${hoy.getDate()}`.slice(-2); 
    const mes = `0${hoy.getMonth() + 1}`.slice(-2); 
    const año = hoy.getFullYear();
  
    return `${dia}/${mes}/${año}`;
  }

  logout(){
    this.auth.logout();
    this.route.navigate(['']);
  }

  private addTipoComida(){
    
    this.informacionNutricional.forEach(response =>{
      if(response!=null){
      response.comidas.forEach(comida=>{

        this.tipoComida.push(comida.tipoComida);
      })
    }})
  }
  
}
