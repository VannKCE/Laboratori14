console.log("Ejercicio 17");
class Cuenta {
    #saldo;

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }

    depositar(monto) {
        if (monto > 0) this.#saldo += monto;
    }

    retirar(monto) {
        if (monto <= this.#saldo) this.#saldo -= monto;
        else console.log("Fondos insuficientes");
    }

    getSaldo() {
        return this.#saldo;
    }

    transferir(cuentaDestino, monto) {
        if (monto <= this.#saldo) {
            this.retirar(monto);
            cuentaDestino.depositar(monto);
        } else {
            console.log("Transferencia no posible");
        }
    }
}

class CuentaAhorro extends Cuenta {
    retirar(monto) {
        if (monto <= this.getSaldo()) super.retirar(monto);
        else console.log("No puedes sobregirar tu cuenta de ahorro.");
    }
}

class CuentaCorriente extends Cuenta {
    constructor(saldoInicial, limiteSobregiro) {
        super(saldoInicial);
        this.limiteSobregiro = limiteSobregiro;
    }

    retirar(monto) {
        if (monto <= this.getSaldo() + this.limiteSobregiro) {
            super.retirar(monto);
        } else {
            console.log("Límite de sobregiro excedido.");
        }
    }
}

let ahorro = new CuentaAhorro(500);
let corriente = new CuentaCorriente(300, 200);

corriente.retirar(400);
ahorro.transferir(corriente, 100);
console.log("Saldo ahorro:", ahorro.getSaldo());
console.log("Saldo corriente:", corriente.getSaldo());
