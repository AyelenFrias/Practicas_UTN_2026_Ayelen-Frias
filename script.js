/* 8-10-26 FUNCIONES

console.log ("hola mundo")*/


/* TAREA 1 (PARA QUE APAREZCA POR CONSOLA)

function CalcularIva(precio) {
    let iva = Number(precio) * 0.21;
    console.log("Calculando IVA para el precio: " + precio + " es " + iva);
}

CalcularIva(1000);
CalcularIva(2000);
CalcularIva(3000);
CalcularIva(100);
CalcularIva(200);*/






/* TAREA 1 BIS (PARA QUE APAREZCA POR CONSOLA Y ALERTA Y QUE EL USUARIO TENGA QUE PONER EL PRECIO)

function CalcularIva(precio) {
    let resultado = Number(precio) * 0.21;
    let iva =  0.21;
    console.log("Calculando IVA para el precio: " + precio + " * " + iva + "= " + resultado + "con iva");
    alert("Calculando IVA para el precio: " + precio + iva + "= " + resultado + "con iva");
    
}

let precio= prompt("Ingrese el precio del producto: ")
CalcularIva (precio)*/






/*TAREA 2
let pais_1 = {
    nombre: "Argentina",
    id: 1,
    continente: "America",
    habitantes: 45000000,
    capital: "Buenos Aires",
    idioma: "Español"
    km2: 2780000,
}

let pais_2 = {
    nombre: "Francia",
    id: 2,
    continente: "Europa",
    habitantes: 68000000,
    capital: "París",
    idioma: "Francés"
    km2: 643801,
}


    let pais_3 = {
    nombre: "Irlanda",
    id: 3,
    continente: "Europa",
    habitantes: 68000000,
    capital: "Dublín",
    idioma: "Irlandés"
    km2: "70275",
}*/

/* TAREA 3
Crear las funciones:
    renombrar(nombre) Debe cambiar el nombre del personaje
    cobrarSueldo() Debera agregar al salario el valor de su sueldo
    incrementarSueldoPorPorcentaje(porcentaje) incrementar el salario en ese porcentaje
    cumplirAnios() Incrementar su edad en 1
*/

/*function renombrarPersonaje(nuevo_nombre){
    personaje.nombre = nuevo_nombre
}

function cobrarSueldo(sueldo){
    personaje.sueldo = sueldo + personaje.salario
}

function incrementarSueldoPorPorcentaje(porcentaje){
    personaje.salario_incrementado = personaje.sueldo + (personaje.sueldo * porcentaje /100) 
}

function cumplirAnios(){
    personaje.edad = personaje.edad + 1
}


let personaje = {
    nombre: 'pepe',
    edad: 29,
    id: 1,
    dinero: 20,
    salario: 5000
}

console.log("personaje original: " + personaje.nombre)
renombrarPersonaje('victor')
console.log("personaje modificado: " + personaje.nombre)

cobrarSueldo(5000)
console.log("dinero despues de cobrar sueldo: " + personaje.sueldo)

incrementarSueldoPorPorcentaje(25)
let porcentaje = 25
console.log("salario despues de incrementar: " + Number(porcentaje) + "%" + " " + "a mi sueldo" + " " + personaje.sueldo + " " + "deberia ser: " + personaje.salario_incrementado)

cumplirAnios()
console.log("edad despues de cumplir años: " + Number(personaje.edad))*/