//metodos de objectos
const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true,
    monstrarInfo: function(){
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
};

//Obtener las llaves o parte izquierda del objecto
console.log(Object.keys(producto));

//Obtiene los valores del objecto
console.log(Object.values(producto));

//Retorna todo en pares
console.log(Object.entries(producto));