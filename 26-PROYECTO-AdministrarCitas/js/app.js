//datos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');


const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');


let editando;

class citas{
    constructor(){
        this.citas = [];
    }

    agregarCita (cita){
        this.citas = [...this.citas, cita];

        console.log(this.citas);
    }

    eliminarCita(id){
        this.citas = this.citas.filter( cita => cita.id !== id )
    }

}

class UI{

    imprimirAlerta(msj, tipo){


        //crear div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert','d-block','col-12');

        //Agregar clase de acuerdo al tipo
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        //mensaje de error
        divMensaje.textContent = msj;

        //Agregar al dom
        document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'));


        //quitar mensaje despues de 3 seg
        setTimeout( () =>{
            divMensaje.remove()
        },3000);

    }

    imprimirCitas({citas}){
        //console.log(citas)

        this.limpiarHTML();

        citas.forEach(cita => {
            const {mascota , propietario , telefono,fecha,hora,sintomas,id} = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-3');
            divCita.dataset.id = id;


            //scripting de los elementos de cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title','font-weight-bolder');
            mascotaParrafo.textContent = mascota;


            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML= `
                <span class="font-weight-bolder">Propiertario: </span>${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML= `
                <span class="font-weight-bolder">Telefono: </span>${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML= `
                <span class="font-weight-bolder">Fecha: </span>${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML= `
                <span class="font-weight-bolder">Hora: </span>${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML= `
                <span class="font-weight-bolder">Sintomas: </span>${sintomas}
            `;
            

            //Boton para eliminar esta cita
            const btneliminar = document.createElement('button');
            btneliminar.classList.add('btn','btn-danger','mr-2')
            btneliminar.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" '+
                                    'stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" '+
                                    'strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>';
            
            btneliminar.onclick = () => eliminarCita(id);


            //boton edita cita
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn','btn-info');
            btnEditar.innerHTML = 'Editar <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">'+
                                    '<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /> '+
                                    '<path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />'+
                                    '</svg>';
            
            
            btnEditar.onclick = () => editarCita(cita);


            //agregar lo parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btneliminar);
            divCita.appendChild(btnEditar);

            //agregar las citas al html
            contenedorCitas.appendChild(divCita);

        });
        
    }


    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }

}

const ui = new UI();
const administrarCitas = new citas();


//registro de eventos 
eventListeners()
function eventListeners(){
    mascotaInput.addEventListener('input',datosCita);
    propietarioInput.addEventListener('input',datosCita);
    telefonoInput.addEventListener('input',datosCita);
    fechaInput.addEventListener('input',datosCita);
    horaInput.addEventListener('input',datosCita);
    sintomasInput.addEventListener('input',datosCita);

    formulario.addEventListener('submit',nuevaCita);
}

//Objeto de la informacion de la cita
const objDatos = {
    mascota:'',
    propietario:'',
    telefono:'',
    fecha:'',
    hora:'',
    sintomas:''
}

//agregar datos al objeto
function datosCita(e){
    objDatos[e.target.name] = e.target.value;
    //console.log(objDatos);

}

//valida y agrega una nueva cita a la clase citas
function nuevaCita(e){
    e.preventDefault();
    //Extraer la informacion del objeto de cita
    const {mascota , propietario , telefono,fecha,hora,sintomas} = objDatos;

    //validar
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        //console.log("Todos los campos son obligatorios");
        ui.imprimirAlerta('Todos los campos son obligatorios','error');
        return;
    }

    if(editando){
        //console.log("Modo Edicion");
        ui.imprimirAlerta('Editado correctamente');
        //Pasar el objeto de la cita a edicion


        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
        //Quitar modo edicion
        editando = false;
    }else{
        //console.log("Modo nueva cita");

        //generar un id unico
        objDatos.id = Date.now();

        //Creando una cita nueva
        administrarCitas.agregarCita({...objDatos});

        //Mensaje agregado correctamente
        ui.imprimirAlerta('Se agrego correctamente');
    }


    //Reiniciar el objeto para la validacion
    reiniciarObjeto();

    //Reiniciar el formulario
    formulario.reset();


    //Mostrar el HTML de las citas
    ui.imprimirCitas(administrarCitas);
    
}

function reiniciarObjeto(){
    objDatos.mascota = '';
    objDatos.propietario = '';
    objDatos.telefono = '';
    objDatos.fecha = '';
    objDatos.hora = '';
    objDatos.sintomas = '';
}

function eliminarCita(id){
    //console.log(id);

//Eliminar cita
administrarCitas.eliminarCita(id)

//Mostrar mensaje
ui.imprimirAlerta('La cita se elimino correctamente');

//Refrescar la cita
ui.imprimirCitas(administrarCitas);

}

//Edicion de la cita
function editarCita(cita){
    //console.log(cita);
    const {mascota , propietario , telefono,fecha,hora,sintomas,id} = cita;

    //llenar inputs con informacion de la cita
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;


    //llenar objeto
    objDatos.mascota = mascota;
    objDatos.propietario = propietario;
    objDatos.telefono = telefono;
    objDatos.fecha = fecha;
    objDatos.hora = hora;
    objDatos.sintomas = sintomas;
    objDatos.id = id;


    //texto de boton 
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
}