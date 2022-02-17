//weakset

const weakset = new WeakSet();

const cliente = {
    nombre :'alberto',
    saldo:100
} 

weakset.add(cliente)

//weakset.has(cliente)
console.log(weakset.has(cliente))

console.log(weakset)