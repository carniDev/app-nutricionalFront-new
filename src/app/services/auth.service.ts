import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, tap } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Auth } from '../models/auth.model';

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

  login(email: string,password:string):Observable<Auth> {
    return this.http.post<Auth>(`http://localhost:8080/app-nutricional/auth/login`,{email,password}).pipe(tap(response=>{
      if(localStorage.getItem('auth_service')){
        localStorage.clear();
      }
      localStorage.setItem('auth_service',response.token);
    }));
  }
  

  register(user: Usuario):Observable<Auth> {
    return this.http.post<Auth>('http://localhost:8080/app-nutricional/auth/register', user);
  }


  getUsuario():Usuario{
    return this.usuario;
  }

  setUsuario(usuario:Usuario){
    this.usuario = usuario;
  }

  getToken(): string {
    return localStorage.getItem('auth_service') ?? "";
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.clear();
  }

}
