import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-configurar',
  templateUrl: './configurar.component.html',
  styleUrls: ['./configurar.component.css']
})
export class ConfigurarComponent {
usuario!:Usuario;


  constructor(private usuarioService: UsuarioService,private router:Router) {
   this.usuarioService.buscarUsuario().subscribe((resp)=>{
     this.usuario=resp;
   });
  }

  editar(){
    this.usuarioService.actualizarUsuario(this.usuario).subscribe((resp)=>{
      this.router.navigate(['dashboard']);
    });
  }

  cancelar(){
    this.router.navigate(['dashboard']);
  }
}
