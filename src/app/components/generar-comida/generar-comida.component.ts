import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Comida } from 'src/app/models/comida';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-generar-comida',
  templateUrl: './generar-comida.component.html',
  styleUrls: ['./generar-comida.component.css']
})
export class GenerarComidaComponent {
  comida!:Comida;
  tipoComida!:string[];


  constructor(private comidaService:ComidaService,private router:Router){
    this.comida = comidaService.obtenerComida();
    this.tipoComida=comidaService.getTipoComidaDisponible();
  }

  ngOnInit(): void {
   
  }
  buscarAlimento(){
    this.comidaService.guardarComida(this.comida)
    console.log(this.comidaService.obtenerComida())
    this.router.navigate(['buscar-ingrediente']);
  }

  actualizarTipoComida(): void {
    this.comidaService.setTipoComida(this.comida.tipoComida);
  }

  addComida(){
    this.comidaService.guardarComida(this.comida)
    this.comidaService.registrarComida().subscribe((resp) =>{
        this.comidaService.restablecerComida();      
        this.router.navigate(['dashboard']);
      
    }, (error)=>{
      console.log(error);
    })
  }

  cancelar(){
    this.comidaService.restablecerComida();
    this.comidaService.guardarComida(this.comida);
    this.router.navigate(['dashboard']);

  }

  
}
