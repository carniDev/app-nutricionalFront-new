import { Alimento } from "./alimento";

export interface Comida {
    idComida: any;
    tipoComida: string;
    fechaComida: string;
    listadoAlimentos: Alimento[];
    kcal:number,
    hidratosCarbono:number,
    proteinas:number,
    grasas:number
}
