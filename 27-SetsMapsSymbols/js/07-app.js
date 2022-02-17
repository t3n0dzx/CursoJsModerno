function *generadorCarrito (carrito){
    for (let i = 0;i < carrito.length;i++){
        yield carrito[i]
    }
}

const carrito = ['producto 1','producto 2','producto 3'];

const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
