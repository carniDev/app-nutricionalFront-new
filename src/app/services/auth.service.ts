import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario!:Usuario;

  constructor(private http: HttpClient) {
   this.usuario = {
      id: null,
      nombre: '',
      email: '',
      fechaNacimiento:'',
      password: ''
    }
  }

  login(emailObtenido: string):Observable<any> {
    return this.http.get(`http://localhost:8080/app-nutricional/usuario/informacion?email=${emailObtenido}`,{ responseType: 'text' });
  }
  

  register(user: Usuario):Observable<any> {
    return this.http.post('http://localhost:8080/app-nutricional/usuario/registrar', user, { responseType: 'text' });
  }


  getUsuario():Usuario{
    return this.usuario;
  }

  setUsuario(usuario:Usuario){
    this.usuario = usuario;
  }
}
