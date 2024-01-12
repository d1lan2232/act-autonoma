/*1. Crear una función que ingrese dos números por teclado, realizar un menú de opciones para: Sumar -- Restar -- 
Multiplicar y Dividir*/
function repetirLetraYNumero(num, letra) {
    if (Number.isInteger(num) && typeof letra === 'string' && letra.length === 1) {
        return letra.repeat(num);
    } else {
        console.error("Error: 'num' debe ser un número entero y 'letra' debe ser un solo carácter.");
        return null;
    }
}
function mostrarResultado() {
    var numero = document.getElementById("numeroInput").value;
    var letra = document.getElementById("letraInput").value;
    var numeroEntero = parseInt(numero);
    var resultado = repetirLetraYNumero(numeroEntero, letra);
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function generarCaracteres(numero, caracter) {
    if (caracter.length === 1) {
        var resultado = caracter.repeat(numero);
        return resultado;
    } else {
        console.error("Error: El segundo parámetro debe ser un solo carácter.");
        return null;
    }
}

/*2. Crear una función que lea tres notas de un alumno, calcula el promedio e indica si está suspendido o aprobado. 
(<=6 "Suspendido" -- >=7 "Aprobado").*/

let nota1 = parseInt(prompt("Ingrese la 1era nota:"));
let nota2 = parseInt(prompt("Ingrese la 2da nota:"));
let nota3 = parseInt(prompt("Ingrese la 3ra nota:"));

let calcularPromedio = (nota1, nota2, nota3) =>{

    let suma = nota1 + nota2 + nota3;
    let promedio = (suma)/3;
    let estado;

    if (promedio <= 6) {
        estado = "Suspendido";
    } else {
        estado = "Aprobado";
    }

    return {promedio, estado};
}

console.log(calcularPromedio(nota1, nota2, nota3));


/*3. Crea una función que a partir del precio de un producto calcule el precio total (precio+iva).*/
let precio = parseFloat(prompt("Ingrese el precio"));
let calcular = (precio) => {
    let iva = 0.12;
    let precioTotal = precio + (precio * iva);

    return precioTotal;
};
const resultado = calcular(precio);
console.log(`El precio total con IVA es:+ ${resultado}`);

/*Realizar un programa para una concesionaria de autos: Si el auto a la venta
 es un ford fiesta, el descuento es de un 5%. Si el coche a la venta es un 
 ford focus, el descuento es del 10%. El usuario introduce el artículo 
 (o su código) y el programa muestra el descuento correspondiente por 
 pantalla. Utilizar funciones.*/
 let modelo = prompt("Ingrese el modelo. (1:ford fiesta o 2:ford focus)");
 let descuento =0;
 
 let calcularDescuento=(modelo)=>{
  
   if (modelo == 1) {
     let descuento =5;
     return descuento;
   }else if (modelo == 2) {
     let descuento =10;
     return descuento;
   }
   else{
     document.writeln("Opción no válida");
   }
 }
 
 document.writeln("El descuento es: "+calcularDescuento(modelo));

