class Carro{
    constructor(modelo,velocidad,antiguedad,peso){
        this.modelo=modelo;
        this.velocidad=velocidad;
        this.antiguedad=antiguedad;
        this.peso=peso
    }
    acelelar(){
        this.velocidad+=1;
    }
    frenar(){
        if(this.velocidad>0){
            this.velocidad-=1;
        }
    }
}
var carro=new Carro('BMW',150,1,1500); 
var carro1=new Carro('Audi',100,1,4500); 
document.write("<h1>"+carro.modelo +"</h1>")
console.log(carro);

class Bus extends Carro{
    constructor(modelo,velocidad,antiguedad,peso, capacidad){
        super(modelo,velocidad,antiguedad,peso)
        this.capacidad=capacidad
    }
}
var bus1=new Bus("Blue Bird",100,10,9800,80);
console.log(bus1)