// Una clase es una plantilla que define la forma de nuestro objeto

class TornilloDeMadera{
// ATRIBUTOS
    Id:number
    TipoDeCabeza:string;
    TipoDeEstriado:string;
    Largo:string;
    Calibre:number;
    
    constructor(i: number, tp: string, te:string, l:string, c:number){
        this.Id = i
        this.TipoDeCabeza = tp;
        this.TipoDeEstriado = te;
        this.Largo = l;
        this.Calibre = c;
    
    }
// METODO   siempre es un verbo y en infinitivo
    unir():string{
        return "Se une la madera a otro trozo de madera";
    }
}


// INSTANCIA # 1
let tornillo_123456 = new TornilloDeMadera(123456, "cabeza en V", "estriado grueso", "2", 7);
console.log(tornillo_123456)

// INSTANCIA # 2
let tornillo2233 = new TornilloDeMadera(2233, "cabeza plana", "estriado fino", "3", 8);
console.log(tornillo2233)


// INSTANCIA # 3
let tornillo_3344 = new TornilloDeMadera(3344, "cabeza ranurada", "estriado grueso", "1/4", 10);
console.log(tornillo_3344)

// INSTANCIA # 4
let tornillo5566 = new TornilloDeMadera(5566, "cabeza estriada", "estriado fino", "3/8", 8);
console.log(tornillo5566)
