class Auto {
    constructor(color,tipo,clase){
        this.color =color;
        this.tipo = tipo;
        this.clase= clase ;
    }

elegir(){
    console.log(`elija su auto ${this.clase},${this.color}elija como funciona ${this.tipo}`)
    return this;
}
Preparando(){
    console.log("su auto se esta preparando");
    return this;
}
listo(){
    console.log("su auto esta listo en el consecionario");
    return this;
}
}
const tesla = new Auto('negro','electrico',['tesla','comodo','amplio']);

console.log(tesla.elegir());
console.log(tesla.Preparando());
console.log(tesla.listo());

class partesadiccionales extends Auto{

 constructor (pantalla,enchufe,color,tipo,clase) {
 super(color,tipo,clase)  ;
 this.pantalla=pantalla;
 this.enchufe=enchufe;

 }
 partesextras(){
     this.elegir();
     this.Preparando();
     this.listo();
     console.log(`carro: color ${this.color} - ${this.tipo} marca y extras son ${this.clase}, ${this.pantalla} + ${this.enchufe} `);
        return this
 }
}

const Carro = new partesadiccionales ('pantalla tactil de navegacion','enchufe de cargador','negro','electrico',['tesla','comodo','amplio']);
console.log(Carro.partesextras());

