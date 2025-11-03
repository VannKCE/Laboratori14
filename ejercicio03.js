console.log("Ejercicio 03");
let precio = parseFloat(prompt("Ingrese un número decimal: "));

let abajo = Math.floor(precio);
let arriba = Math.ceil(precio);
let normal = Math.round(precio);

console.log("Precio original: " + precio);
console.log("Redondeo hacia abajo: " + abajo);
console.log("Redondeo hacia arriba: " + arriba);
console.log("Redondeo normal: " + normal);