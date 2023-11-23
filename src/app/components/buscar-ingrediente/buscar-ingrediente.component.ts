import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged } from 'rxjs';
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
  alimentoInformacion!: Observable<InformacionAlimento[]>;
  alimento!: Alimento;
  nombre = '';
  private searchTerms = new Subject<string>();


  constructor(private busquedaService: BusquedaService, private comidaService: ComidaService, private router: Router) {
    this.alimento = this.comidaService.getAlimentoAEditar();
    this.searchTerms.pipe(
      debounceTime(300),     
      distinctUntilChanged()    
    ).subscribe((term) => this.realizarBusqueda(term));
  }

  buscar(term: string): void {
    this.searchTerms.next(term);
  }
  realizarBusqueda(term:string):void {

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
    this.nombre = '';

  }
  cancelar() {
    this.router.navigate(['dashboard']);
  }

}


