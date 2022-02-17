//set permite crear una lista de valores sin duplicados

const carrito = new Set();

//set metodos
carrito.add('camisa');
carrito.add('disco #1');
carrito.add('camisa');

//delete
//carrito.delete('camisa');


//limpiar o eliminar todos los elementos del set
//carrito.clear();


console.log(carrito.has('camisa'))//true o false 

console.log(carrito.size)//tamaño del arreglo


carrito.forEach( producto =>{
    console.log(producto);
})

console.log(carrito);



//eliminar duplicados

const numeros =  [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);
console.log(noDuplicados)