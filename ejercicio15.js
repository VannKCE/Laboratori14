console.log("Ejercicio 15");
const usuarios = [
    new Cliente("Carlos", "carlos@mail.com", 3),
    new Administrador("Marta", "marta@admin.com", ["editar", "eliminar"]),
    new Cliente("Sofia", "sofia@mail.com", 5)
];

usuarios.forEach(usuario => {
    console.log(usuario.mostrarInfo());
});

