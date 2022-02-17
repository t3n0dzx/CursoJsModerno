const cliente = new Map();

cliente.set('nombre','karen');
cliente.set('tipo','premium');
cliente.set('saldo',3000);

console.log(cliente);


console.log(cliente.size)
console.log(cliente.has('nombre'))
console.log(cliente.get('nombre'))


cliente.forEach( client => {
    console.log(client)
})
