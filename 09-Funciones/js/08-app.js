function sumar(a,b){
    //console.log(a+b)
    return a + b 
}

let resultado = sumar(2,3)

//console.log(resultado)

//Ejemplo mas avanzado
let total = 0;

function agregarCarrito(precio){
    return total += precio
}

function calculaImpuesto(total){
    return total * 1.16
}

total = agregarCarrito(500);
total = agregarCarrito(600);
total = agregarCarrito(700);

const totalPagar = calculaImpuesto(total)

console.log(`Total sin inpuesto ${total}`);
console.log(`El total a pagar con inpuesto ${totalPagar}`)




