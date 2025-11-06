console.log(`Ejercicio 11`);
class Producto {
    #nombre;
    #precio;
    #stock;
    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.setPrecio(precio);
        this.setStock(stock);
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setPrecio(precio) {
        if (precio > 0) this.#precio = precio;
        else console.log(`El precio debe ser mayor a 0`);
    }

    setStock(stock) {
        if (stock >= 0) this.#stock = stock;
        else console.log(`El stock no puede ser negativo`);
    }

    vender(cantidad) {
        if (cantidad <= this.#stock) {
            this.#stock -= cantidad;
            console.log(`Venta realizada. Stock restante: ${this.#stock}`);
        } else {
            console.log(`No hay suficiente stock`);
        }
    }

    getStock() {
        return this.#stock;
    }
}

let prod1 = new Producto(`Camisa`, 50, 10);
prod1.vender(3);
prod1.vender(8);
console.log(`Stock actual:`, prod1.getStock());

