console.log("Ejercicio 19");
class Notificacion {
    enviar() {
        console.log("Enviando notificación genérica...");
    }
}

class Email extends Notificacion {
    enviar() {
        console.log("Enviando notificación por Email...");
    }
}

class SMS extends Notificacion {
    enviar() {
        console.log("Enviando notificación por SMS...");
    }
}

class Push extends Notificacion {
    enviar() {
        console.log("Enviando notificación Push...");
    }
}

function procesarNotificaciones(lista) {
    for (const notificacion of lista) {
        notificacion.enviar();
    }
}

const notificaciones = [new Email(), new SMS(), new Push()];
procesarNotificaciones(notificaciones);

