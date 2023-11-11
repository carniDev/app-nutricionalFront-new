import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alimento } from 'src/app/models/alimento';
import { InformacionAlimento } from 'src/app/models/informacion-alimento';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { ComidaService } from 'src/app/services/comida.service';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-buscar-ingrediente',
  templateUrl: './buscar-ingrediente.component.html',
  styleUrls: ['./buscar-ingrediente.component.css']
})
export class BuscarIngredienteComponent {
  nombre!: string;
  alimentoInformacion!: Observable<InformacionAlimento[]>;
  alimentoSeleccionado!: InformacionAlimento;
  alimento!: Alimento;



  constructor(private busquedaService: BusquedaService, private comidaService: ComidaService, private router: Router,private editarService:EditarService) {
    
    this.alimento=this.editarService.getAlimentoAEditar();
  }


  buscar() {

    this.alimentoInformacion = this.busquedaService.buscar(this.nombre);

  }

  addInfo() {
    if(this.alimento==undefined){
    this.comidaService.agregarAlimento(this.alimento);
    this.router.navigate(['generar-comida']);
    }else{
      this.editarService.editarAlimentoAfterSearch(this.alimento);
      this.router.navigate(['editar-comida']);
    }
  
  }

  seleccionarInfo(informacion: InformacionAlimento) {
    this.alimentoSeleccionado = informacion;

    if(this.alimento==undefined){
    this.alimento = {
      idAlimento: null,
      informacion: this.alimentoSeleccionado,
      cantidadAlimento: 0
    }
  }else{
    this.alimento.informacion=informacion;
  }

    
  }

  reset() {

  }
  cancelar() {
    this.router.navigate(['generar-comida']);
  }

}


