import { Comida } from "./comida";

export interface InformacionNutricional {
    kcal: number;
    hidratosCarbono: number;
    proteinas: number;
    grasas: number;
    comidas: Comida[];
}
