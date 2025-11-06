console.log("Ejercicio 10");
function normalizarCalificaciones(calificaciones) {
    const max = Math.max(...calificaciones);
    return calificaciones.map(nota => nota / max);
}

console.log(normalizarCalificaciones([50, 80, 100]));
