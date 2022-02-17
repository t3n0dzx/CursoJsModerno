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

//herencia
class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,categoria){
        super(nombre, saldo);
        this.telefono= telefono;
        this.categoria = categoria;
    }

}

//instanciar clase
const cliente = new Cliente('Alberto',4000);
const empresa = new Empresa('Codigo con Beto',6000,5530341123,"Apredizaje online");


console.log(cliente);
console.log(empresa);
console.log(empresa.monstrarInformacion());