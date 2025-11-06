console.log("Ejercicio 09");
function calcularDistancia(x1, y1, x2, y2) {
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const distanciaOrigen1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    const distanciaOrigen2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    return {
        distancia,
        sumaDistanciasOrigen: distanciaOrigen1 + distanciaOrigen2
    };
}

console.log(calcularDistancia(3, 4, 6, 8));

