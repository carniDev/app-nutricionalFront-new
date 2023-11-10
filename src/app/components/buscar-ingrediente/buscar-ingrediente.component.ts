import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-ingrediente',
  templateUrl: './buscar-ingrediente.component.html',
  styleUrls: ['./buscar-ingrediente.component.css']
})
export class BuscarIngredienteComponent {

  constructor(private router:Router){

  }

  buscar(){}
  reset(){}
  seleccionarInfo(){}
  addInfo(){}
  cancelar(){
this.router.navigate(['generar-comida'])
  }
}
