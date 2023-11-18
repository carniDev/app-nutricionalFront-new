import { Injectable } from '@angular/core';
import { Comida } from '../models/comida';
import { Alimento } from '../models/alimento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {
  private comida: Comida; 
  alimentoAEditar!:Alimento;

  constructor(private http:HttpClient) { 
    this.comida = {
      idComida: null,
      tipoComida: '',
      fechaComida: this.obtenerFechaHoyFormatoDDMMYYYY(),
      listadoAlimentos: [],
      email:''
    };
  }

  
  obtenerComida(): Comida {
    return this.comida;
  }
  guardarComida(comida:Comida):void{
    this.comida = comida;
  }
  registrarComida():Observable<any>{
      console.log(this.comida);
     return this.http.post(`http://localhost:8080/app-nutricional/comida/registrar`,this.comida,{responseType: 'text' as 'json'});

  }

  editarComida():Observable<any>{
    const fecha = this.formatDate(this.comida.fechaComida);
    this.comida.fechaComida=fecha;
    console.log(this.comida);
    return this.http.put(`http://localhost:8080/app-nutricional/comida/editar`,this.comida,{responseType: 'text' as 'json'});
 
 }

  agregarAlimento(alimento: Alimento): void {
    this.comida.listadoAlimentos.push(alimento);
  }

  addAlimentoAEditar(alimento:Alimento){
    this.alimentoAEditar= alimento;
    
  }

  getAlimentoAEditar():Alimento{
    return this.alimentoAEditar;
  }

  setTipoComida(tipo: string): void {
    this.comida.tipoComida = tipo;
  }

  getTipoComida(): string {
    return this.comida.tipoComida;
  }
  editarAlimentoAfterSearch(alimento:Alimento){
    let objetoParaActualizar = this.comida.listadoAlimentos.find(objeto => objeto.idAlimento === alimento.idAlimento);
    if (objetoParaActualizar) {
    objetoParaActualizar.informacion = alimento.informacion;
    }
  }


  private obtenerFechaHoyFormatoDDMMYYYY(): string {
    const hoy = new Date();
    const dia = `0${hoy.getDate()}`.slice(-2); 
    const mes = `0${hoy.getMonth() + 1}`.slice(-2); 
    const año = hoy.getFullYear();
  
    return `${dia}/${mes}/${año}`;
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
  setEmail(email:string){
    this.comida.email= email;
  }

  restablecerComida(){
      this.comida=  {
        idComida: null,
        tipoComida: '',
        fechaComida: this.obtenerFechaHoyFormatoDDMMYYYY(),
        listadoAlimentos: [],
        email:''
      };
  }
}
