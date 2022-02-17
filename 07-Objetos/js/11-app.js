const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible: true,
    monstrarInfo: function(){
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
};

producto.monstrarInfo();