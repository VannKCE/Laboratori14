console.log(`Ejercicio 12`);
class ProductoConFormato {
    #nombre;
    #precio;
    #stock;

    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.setPrecio(precio);
        this.setStock(stock);
    }

    setPrecio(precio) {
        precio = Number(precio);
        if (precio > 0) this.#precio = precio;
        else console.log(`El precio debe ser mayor a 0`);
    }

    getPrecio() {
        return `$${this.#precio.toFixed(2)}`;
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

let prod2 = new ProductoConFormato(`Zapato`, `120.5`, 5);
console.log(prod2.getPrecio()); // "$120.50"
prod2.vender(2);

