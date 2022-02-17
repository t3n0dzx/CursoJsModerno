export const nombreCliente = 'Alberto Tenorio'
export const ahorro = 200;


export function monstrarInformacion(nombre,ahorrro){
    return`Cliente ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log("Si tiene saldo");
    }else{
        console.log('El cliente no tiene saldo');
    }
}

export class Cliente {
    constructor(nombre,ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInfo(){
        return `Cliente ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}