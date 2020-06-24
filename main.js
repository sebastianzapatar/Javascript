var nombre="Sebastian Zapata"
var estatura=175
var contat=nombre+" "+estatura

var datos=document.getElementById("datos")
datos.innerHTML=`
    <h2>Soy el div</h2>
    <h3>Mi Nombre es ${nombre}</h3>
    <h4>Mi estatura es ${estatura}</h4>
`;

if(estatura>=180){
    datos.innerHTML+='<h3>Eres una persona de estatura normal</h3>';
}
else{
    datos.innerHTML+='<h3>Eres una persona de estatura baja</h3>';
}
var acum=0
for(var i=0;i<=2020;i++){
    acum+=i;
}
datos.innerHTML+=`<h3>La suma es ${acum}</h3>`;

function imc(peso, altura){
    return peso/(altura*altura);
}

indice=imc(82.9,1.83);
if(indice>=25){
    datos.innerHTML=`<h3>Estas gordito imc es igual a ${indice}</h3>`
}
else{
    datos.innerHTML=`<h3>Estas bien sigue así imc es igual a ${indice}</h3>`
}
var nombres=['Juan','Camilo','Pedro']
for(var i=0;i<nombres.length;i++){
    document.write(nombres[i] +"<br/>")
    
}
//Con programación funcional
nombres.forEach(function (nombre){
    document.write(nombre +"<br/>")
})
var coche={
    modelo:'BWM CX3',
    velocidad_maxima:'250',
    antigueda:10,
    mostardatos(){
        console.log(this.modelo, this.velocidad_maxima, this.antigueda)
    },
}
document.write("<h1>"+coche.modelo+"</h1>")
coche.mostardatos()
var saludar=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        var saludo="Hola estudiantes de fullstack";
        //saludo=false;
        if(saludo){
            resolve(saludo);
        }
        else{
            reject('No hay saludo');
        }
    },2000);
})
saludar.then(resultado=>{
    alert(resultado)
})
.catch(err =>{
    alert(err);
})