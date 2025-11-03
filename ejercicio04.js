console.log("Ejercicio 04");
function numeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

console.log(numeroAleatorio(5, 17));