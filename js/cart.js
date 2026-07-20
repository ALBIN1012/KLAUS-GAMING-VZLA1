/* ========================================================= */
/* CEREBRO DEL CARRITO DE COMPRAS - KLAUS GAMING VZLA        */
/* ========================================================= */

// 1. Obtener los juegos guardados en la memoria del navegador
function getCarrito() {
    return JSON.parse(localStorage.getItem('klaus_carrito')) || [];
}

// 2. Guardar el carrito y actualizar el número en la pantalla
function saveCarrito(carrito) {
    localStorage.setItem('klaus_carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

// 3. Función para agregar un juego al carrito
function agregarAlCarrito(nombre, precio, imagen) {
    let carrito = getCarrito();
    // Añadimos el nuevo producto convirtiendo el precio a número
    carrito.push({ nombre: nombre, precio: parseFloat(precio), imagen: imagen });
    saveCarrito(carrito);
    alert(`🛒 ¡"${nombre}" fue agregado con éxito!\nLlevas ${carrito.length} producto(s) en tu carrito.`);
}

// 4. Función para eliminar un juego de la lista
function eliminarDelCarrito(index) {
    let carrito = getCarrito();
    let eliminado = carrito[index].nombre;
    carrito.splice(index, 1); // Borra el producto en esa posición
    saveCarrito(carrito);
    
    // Si estamos en la página del carrito, volvemos a dibujar la tabla
    if (window.location.pathname.includes('carrito.html')) {
        renderizarCarrito();
    }
}

// 5. Actualizar el iconito con el número de juegos en la cabecera
function actualizarContadorCarrito() {
    let carrito = getCarrito();
    let contadores = document.querySelectorAll('.cart-counter-badge');
    contadores.forEach(badge => {
        badge.innerText = carrito.length;
    });
}

// Ejecutar el contador automáticamente al abrir cualquier página
document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito();
});