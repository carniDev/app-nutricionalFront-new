export class Macronutrientes {

    kcal: number;
    hidratosCarbono: number;
    proteinas: number;
    grasas: number;
    constructor() {
        this.kcal = 2000;
        this.hidratosCarbono = Math.round(this.kcal*0.6/4);
        this.proteinas = Math.round(this.kcal*0.15/4);
        this.grasas = Math.round(this.kcal*0.3/9);
    }
}