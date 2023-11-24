import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) {

  }

actualizarUsuario(usuario:Usuario):Observable<any>{
  console.log(usuario)
  return this.http.put(`http://localhost:8080/app-nutricional/usuario/editar`, usuario, { responseType: 'text' as 'json' });

}


buscarUsuario():Observable<Usuario> {
  return this.http.get<Usuario>(`http://localhost:8080/app-nutricional/usuario/informacion`);
}
  

}

