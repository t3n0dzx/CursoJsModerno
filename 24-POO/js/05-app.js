//Class declaration
class Cliente{
    
    #nombre;

    setNombre (nombre){
        this.#nombre = nombre;
    }

    getNombre(nombre){
        return  this.#nombre;
    }

}

const name = new Cliente();
name.setNombre('Betito');
console.log(name.getNombre());