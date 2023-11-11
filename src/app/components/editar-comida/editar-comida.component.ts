import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alimento } from 'src/app/models/alimento';
import { Comida } from 'src/app/models/comida';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-editar-comida',
  templateUrl: './editar-comida.component.html',
  styleUrls: ['./editar-comida.component.css']
})
export class EditarComidaComponent {
  comida!: Comida;



  constructor(private editarService: EditarService, private router: Router) {
    this.comida = this.editarService.getComida();
    console.log(this.comida);
  }


  editarAlimento(alimento: Alimento) {
    this.editarService.addAlimentoAEditar(alimento);
    this.router.navigate(['buscar-ingrediente']);
  }



  cancelar() {
    this.editarService.restablecerComida();
    this.router.navigate(['dashboard']);

  }









}
