import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformacionNutricional } from '../models/informacion-nutricional';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {


constructor(private http: HttpClient) {}

  buscar(credentials:any):Observable<InformacionNutricional> {
    return this.http.get<InformacionNutricional>(`http://localhost:8080/app-nutricional/dashboard/informacion-diaria?fechaDia=${credentials.fechaBuscar}&email=${credentials.email}`);
  }
}