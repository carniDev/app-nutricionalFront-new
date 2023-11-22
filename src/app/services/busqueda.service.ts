import { Injectable } from '@angular/core';
import { InformacionAlimento } from '../models/informacion-alimento';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private http:HttpClient){}

  buscar(nombre: string):Observable<InformacionAlimento[]> {
    return this.http.get<InformacionAlimento[]>(`http://localhost:8080/app-nutricional/informacion-nutricional/listar-nombre?nombre=${nombre}`);
  }

  buscarUsuario(email: string):Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/app-nutricional/usuario/informacion?email=${email}`);
  }
}
