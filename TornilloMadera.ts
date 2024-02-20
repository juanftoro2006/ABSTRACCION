class TornilloDeMadera{
    TipoDeCabeza:string;
    TipoDeEstriado:string;
    Largo:number;
    Calibre:number;
    
    constructor(tp: string, te:string, l:number, c:number){
        this.TipoDeCabeza = tp;
        this.TipoDeEstriado = te;
        this.Largo = l;
        this.Calibre = c;
    
    }
}

let tornillo = new TornilloDeMadera("cabeza en V", "estriado grueso", 2, 7);
console.log(tornillo)
