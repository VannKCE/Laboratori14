console.log("Ejercicio 13");
class Figura {
    area() {
        return 0;
    }
    perimetro() {
        return 0;
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    area() {
        return Math.pow(this.lado, 2);
    }
    perimetro() {
        return this.lado * 4;
    }
}

class Triangulo extends Figura {
    constructor(lado1, lado2, lado3) {
        super();
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    area() {
        const s = (this.lado1 + this.lado2 + this.lado3) / 2;
        return Math.sqrt(s * (s - this.lado1) * (s - this.lado2) * (s - this.lado3));
    }
    perimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
}

const c = new Cuadrado(5);
console.log("Cuadrado -> Área:", c.area(), "Perímetro:", c.perimetro());

const t = new Triangulo(3, 4, 5);
console.log("Triángulo -> Área:", t.area(), "Perímetro:", t.perimetro());

