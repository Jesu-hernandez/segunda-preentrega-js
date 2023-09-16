// Definir una lista de productos y sus precios
const productos = [
    { nombre: "Botella de Agua", precio: 10 },
    { nombre: "Cereal", precio: 20 },
    { nombre: "Coca-Cola", precio: 30 },
    { nombre: "Leche", precio: 40 },
    { nombre: "Pan", precio: 50 },
    { nombre: "Manzanas", precio: 60 },
    { nombre: "Pasta", precio: 70 },
    { nombre: "Yogur", precio: 80 },
    { nombre: "Papel Higiénico", precio: 90 },
    { nombre: "Chocolate", precio: 100 }
];

  // Función para mostrar los productos disponibles
    function mostrarProductos() {
        let mensaje = "Productos disponibles :\n ";
    for (let i = 0; i < productos.length; i++) {
        mensaje += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
    alert(mensaje);
}

  // Función para que el usuario elija un producto
function elegirProducto() {
    const eleccion = parseInt(prompt("Elige un producto ingresando el número correspondiente:"));

    if (!isNaN(eleccion) && eleccion >= 1 && eleccion <= productos.length) {
        return productos[eleccion - 1];
    } else {
        alert("Opción inválida. Por favor, elige un número válido.");
        return null;
    }
}

  // Función principal
function main() {
    mostrarProductos();
    let totalAPagar = 0;
    let productosElegidos = [];

    while (true) {
        const productoElegido = elegirProducto();

    if (productoElegido) {
        productosElegidos.push(productoElegido);
        totalAPagar += productoElegido.precio;
        alert(`Has seleccionado: ${productoElegido.nombre} - $${productoElegido.precio}`);
        const continuar = confirm("¿Quieres elegir otro producto?");
        if (!continuar) {
            break;
        }
        } else {
        alert("Producto no encontrado.");
        }
    }

    if (productosElegidos.length > 0) {
        alert(`Has seleccionado los siguientes productos:\n\n${productosElegidos.map(p => `${p.nombre} - $${p.precio}`).join('\n')}\n\nTotal a pagar: $${totalAPagar}`);
    } else {
        alert("No has seleccionado ningún producto.");
    }
}

  // Ejecutar el programa
main();