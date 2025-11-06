console.log("Ejercicio 18");
class Productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        return this.productos.reduce((total, p) => total + p.precio, 0);
    }

    mostrarResumen() {
        console.log("Carrito de compras:");
        this.productos.forEach(p => console.log(`- ${p.nombre}: $${p.precio.toFixed(2)}`));
        console.log(`Total: $${this.calcularTotal().toFixed(2)}`);
    }
}

const carrito = new Carrito();
carrito.agregarProducto(new Productos("Camisa", 50));
carrito.agregarProducto(new Productos("Pantalón", 80));
carrito.mostrarResumen();

