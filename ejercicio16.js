console.log("Ejercicio 16");
class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }

    calcularSueldo() {
        return this.sueldoBase;
    }
}

class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    }

    calcularSueldo() {
        return this.sueldoBase * 1.10;
    }
}

class ProgramadorSenior extends Programador {
    calcularSueldo() {
        return super.calcularSueldo() * 1.25; 
    }
}

const p1 = new Programador("Diego", 2000, "JavaScript");
const ps1 = new ProgramadorSenior("Laura", 3000, "Python");

console.log(`${p1.nombre}: $${p1.calcularSueldo().toFixed(2)}`);
console.log(`${ps1.nombre}: $${ps1.calcularSueldo().toFixed(2)}`);

