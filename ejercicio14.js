console.log(`Ejercicio 14`);
class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    mostrarInfo() {
        return `Usuario: ${this.nombre} - Email: ${this.email}`;
    }
}

class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = Math.min(Math.max(nivelFidelidad, 1), 5); 
    }

    mostrarInfo() {
        return `Cliente: ${this.nombre} (${this.email}) - Nivel de fidelidad: ${this.nivelFidelidad}`;
    }
}

class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }

    mostrarInfo() {
        return `Administrador: ${this.nombre} - Permisos: ${this.permisos.join(", ")}`;
    }
}

const c1 = new Cliente(`Ana`, `ana@gmail.com`, 4);
const a1 = new Administrador(`Luis`, `luis@admin.com`, [`crear`, `editar`, `eliminar`]);
console.log(c1.mostrarInfo());
console.log(a1.mostrarInfo());

