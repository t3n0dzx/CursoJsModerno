const sym = Symbol('1');
const sym2 = Symbol('1');


const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar nombre y apellido con llaver del objeto 
persona[nombre] = 'juan';
persona[apellido] = 'De la Torre';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
console.log(persona[nombre])


//las propiedades que utilizan un symbol no son iterable
for(let i in persona){
    console.log(i);
}

//definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del Cliente');

const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente)
console.log(cliente[nombreCliente])
console.log(nombreCliente)