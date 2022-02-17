//Añadir o eliminar propiedades de un objecto

const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true
};

//Agregar propiedades al objeto
producto.imagen = "imagen.jpg";

//Quitar propiedad de un objeto
delete producto.disponible;

console.log(producto);
