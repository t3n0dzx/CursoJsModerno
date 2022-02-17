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