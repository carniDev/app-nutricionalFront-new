import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alimento } from 'src/app/models/alimento';
import { InformacionAlimento } from 'src/app/models/informacion-alimento';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { ComidaService } from 'src/app/services/comida.service';
@Component({
  selector: 'app-buscar-ingrediente',
  templateUrl: './buscar-ingrediente.component.html',
  styleUrls: ['./buscar-ingrediente.component.css']
})
export class BuscarIngredienteComponent {
  nombre!: string;
  alimentoInformacion!: Observable<InformacionAlimento[]>;
  alimento!: Alimento;



  constructor(private busquedaService: BusquedaService, private comidaService: ComidaService, private router: Router) {
    this.alimento = this.comidaService.getAlimentoAEditar();
  }


  buscar() {

    this.alimentoInformacion = this.busquedaService.buscar(this.nombre);

  }

  addInfo() {
    this.comidaService.agregarAlimento(this.alimento);
  }

  seleccionarInfo(informacion: InformacionAlimento) {
    if (this.alimento == undefined) {
      this.alimento = {
        idAlimento: null,
        informacion: informacion,
        cantidadAlimento: 0
      }
      this.comidaService.agregarAlimento(this.alimento);
      this.router.navigate(['generar-comida']);
    } else {
      this.alimento.informacion = informacion;
      this.comidaService.editarAlimentoAfterSearch(this.alimento);
      this.router.navigate(['editar-comida']);
    }
  }

  reset() {
    

  }
  cancelar() {
    this.router.navigate([]);
  }

}


