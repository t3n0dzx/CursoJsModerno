const carrito = [];

const producto = {
    nombre :"Monitor 32 pulgadas",
    precio : 400
};

const producto2 = {
    nombre :"Celular",
    precio : 300
};

const producto3 = {
    nombre :"teclado",
    precio : 200
};


//crear un arreglo de manera declarativa
 let resultado;

 resultado = [...carrito,producto];
 resultado = [...resultado,producto2];
 resultado = [producto3,...resultado];

 console.table(resultado)