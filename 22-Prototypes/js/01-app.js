//Object literal
//No te permite crer objecto dinamicos ni reutilizables
const cliente = {
    nombre:'Alberto',
    saldo:50000
}

console.log(cliente)




//Object Contructor
//Te permite crear objecto dinamicos y reutilizables
function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    
}

const albert = new Cliente('Juan',50000);

console.log(albert)