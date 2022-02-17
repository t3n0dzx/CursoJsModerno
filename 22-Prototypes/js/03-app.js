//object constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;  
}


//instancionar el objeto del contructor
const alberto = new Cliente('Alberto',5000);

console.log(alberto)