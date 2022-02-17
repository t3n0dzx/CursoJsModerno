//Object literal
const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true,
    monstrarInfo: function(){
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
};

//Object Constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Monitor de 24 pulgadas",250);
console.log(producto2)



