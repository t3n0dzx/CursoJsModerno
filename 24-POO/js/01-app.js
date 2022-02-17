//Class declaration
class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    monstrarInformacion(){
        return `cliente ${this.nombre}, tu saldo es de ${this.saldo}`
    }

    static bienvenido(){
        return `Bienvenido al Cajero`
    }

}

//instanciar clase
const cliente = new Cliente('Alberto',4000);
console.log(typeof cliente);
console.log(cliente);
console.log(cliente.monstrarInformacion());

console.log(Cliente.bienvenido());