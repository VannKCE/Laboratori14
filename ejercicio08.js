console.log("Ejercicio 08");
function generarContraseña() {
    let contraseña = "";
    for (let i =  0; i < 6; i++){
        let digito = parseInt(Math.random() * 10);
        contraseña += digito;
    }
    return contraseña;
}

console.log(generarContraseña());
