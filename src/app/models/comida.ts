import { Alimento } from "./alimento";

export interface Comida {
    idComida: number;
    tipoComida: string;
    fechaComida: string;
    listadoAlimentos: Alimento[];
}
