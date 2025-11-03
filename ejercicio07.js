console.log("Ejercicio 07");

function gradosARadianes(grados) {
    let radianes = grados * (Math.PI / 180);
    let seno = Math.sin(radianes).toFixed(4);
    let cos = Math.cos(radianes).toFixed(4);
    return { radianes, seno, cos };
}

function radianesAGrados(radianes) {
    let grados = radianes * (180 / Math.PI);
    let seno = Math.sin(grados).toFixed(4);
    let cos = Math.cos(grados).toFixed(4);
    return { grados, seno, cos };
}

console.log(gradosARadianes(90));
console.log(radianesAGrados(Math.PI / 2));

