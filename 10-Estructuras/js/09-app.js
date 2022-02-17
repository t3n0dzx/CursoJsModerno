const autenticado = true;
const puedePagar = false;

console.log(autenticado || puedePagar ? "Si puede pagar" : "No no esta autenticado");


console.log(autenticado ? puedePagar ? "Si esta autenticado y puede pagar" : "Si autenticado y no puede pagar" : "No no esta autenticado");

