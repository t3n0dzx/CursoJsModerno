//variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

//eventos
eventlisteners()
function eventlisteners(){
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto);

    formulario.addEventListener('submit',agregarGasto);
}

//Clases
class Presupuesto{
    constructor(presupuesto){
        //console.log(presupuesto)
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){        
        this.gastos = [...this.gastos, gasto];
        //console.log(this.gastos);
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total , gasto) => total + gasto.cantidad , 0);
        this.restante = this.presupuesto - gastado;
        console.log(this.restante);
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter( gasto => gasto.id !== id)
        this.calcularRestante();
    }
}

class IU{
    insertarPresupuesto(cantidad){
        
        //console.log(cantidad)
        const {presupuesto , restante} = cantidad;

        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirInterfaz(mensaje , tipo){
        //console.log("QUe estan vacios cabro entiende");
        //crear div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');            
        }else{
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de Error
        divMensaje.textContent = mensaje;

        //insertar en HTML
        document.querySelector('.primario').insertBefore(divMensaje,formulario)
        
        setTimeout( ()=>{
            divMensaje.remove()
        },3000);
    }

    agregasGastoList(gastos){
        //console.log(gastos);

        //limpiar html previo
        this.limpiarHTML();
        
        //iterrar sobre los gastos
        gastos.forEach( gasto => {
            //console.log(gasto);
            const {cantidad, nombre, id} =  gasto;

            //Crear un Li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between aling-items-center';
            //nuevoGasto.setAttribute('data-id',id); //hace la misma funcion que la linea de abajo
            nuevoGasto.dataset.id = id;

            //Agregar el html del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad}</span>`;
            
            
            //Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);



            //Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });


    }
    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const {restante,presupuesto} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');
        //comprobar 25%
        if((presupuesto / 4) > restante){            
            restanteDiv.classList.remove('alert-success','alert-warning');
            restanteDiv.classList.add('alert-danger');
        }else if((presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        }else{
            restanteDiv.classList.remove('alert-danger','alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        //si el total es 0 o menor
        if(restante <= 0){
            iu.imprimirInterfaz('El presupuesto se ha agotado','error');
            formulario.querySelector('button[type="submit"]').disabled = true
        }
    }

}


//instancia de clases
const iu = new IU();
let presupuesto;

//Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
    //console.log(presupuestoUsuario);
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
        //console.log('incresa una cantidad , dato invalido...')
    }

    //presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    iu.insertarPresupuesto(presupuesto)
}


function agregarGasto(e){
    e.preventDefault();
    //console.log("Agregar el gasto para tu pollo");


    //leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = parseInt(document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === ''){
        iu.imprimirInterfaz('Campos vacios, favor de validar la información','error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad) ){
        iu.imprimirInterfaz('Cantidad invalida','error');
        return;
    }

    //Generar un objeto con el gasto
    const gasto = {
        nombre,
        cantidad,
        id: Date.now()
    }
    //añade nuevo gasto
    //console.log(presupuesto)
    presupuesto.nuevoGasto(gasto);
    
    //mensaje de todo bien
    iu.imprimirInterfaz('Gasto agregado correctamente');

    //imprimir los gastos
    const { gastos, restante } = presupuesto;
    iu.agregasGastoList(gastos);
    iu.actualizarRestante(restante);
    iu.comprobarPresupuesto(presupuesto)

    //reinicia el formulario
    formulario.reset();
}

function eliminarGasto(id){
    //Elimina del objeto
    presupuesto.eliminarGasto(id)

    //Elimina los gastos del html
    const {gastos, restante} = presupuesto;
    iu.agregasGastoList(gastos);
    iu.actualizarRestante(restante);
    iu.comprobarPresupuesto(presupuesto)
}