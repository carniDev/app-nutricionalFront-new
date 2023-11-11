import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alimento } from 'src/app/models/alimento';
import { Comida } from 'src/app/models/comida';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-editar-comida',
  templateUrl: './editar-comida.component.html',
  styleUrls: ['./editar-comida.component.css']
})
export class EditarComidaComponent {
  comida!: Comida;



  constructor(private comidaService: ComidaService, private router: Router) {
    this.comida = this.comidaService.obtenerComida();
    this.comida.email='juan@email.com';
    this.comida.fechaComida='11/11/2023';
    console.log(this.comida);
  }

  editarComida(){
    this.comidaService.editarComida().subscribe((resp) =>{
      this.comidaService.restablecerComida();
        this.router.navigate(['dashboard']);

      
    }, (error)=>{
      console.log(error);
    })
  }
  editarAlimento(alimento: Alimento) {
    this.comidaService.addAlimentoAEditar(alimento);
    this.router.navigate(['buscar-ingrediente']);
    
  }



  cancelar() {
    this.comidaService.restablecerComida();
    this.router.navigate(['dashboard']);

  }









}
