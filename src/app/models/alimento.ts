import { InformacionAlimento } from "./informacion-alimento";

export interface Alimento {
    idAlimento: number;
    informacion: InformacionAlimento;
    cantidadAlimento: number;
}
