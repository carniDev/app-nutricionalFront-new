import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { BusquedaService } from 'src/app/services/busqueda.service';

@Component({
  selector: 'app-configurar',
  templateUrl: './configurar.component.html',
  styleUrls: ['./configurar.component.css']
})
export class ConfigurarComponent {
usuario!:Observable<Usuario>;

  constructor(private busqueda: BusquedaService) {
    this.usuario = this.busqueda.buscarUsuario(localStorage.getItem('email') ?? "");
  }
}
