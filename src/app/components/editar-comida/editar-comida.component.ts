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
    
    console.log(this.comida)
    
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

  eliminar(){
    this.comidaService.eliminarComida().subscribe(response =>{
      this.comidaService.restablecerComida();
      this.router.navigate(['dashboard']);
    }, (error)=>{
      console.log(error);
    })
    
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 porque los meses comienzan en 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}









}
