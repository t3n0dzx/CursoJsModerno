//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//contenedor para los resultados
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;

//Generando un objeto con la busqueda
const datosBusqueda = {
    marca :'',
    year :'',
    maximo :'',
    minimo :'',
    puertas:'',
    transmision :'',
    color :''
}

//eventos
document.addEventListener('DOMContentLoaded',() =>{
    //Mostrar los autos al cargar
    mostrarAuto(autos);

    //llenar la opcion de años
    llenarSelect();


})

//Evenlister para los selectores de busqueda
marca.addEventListener('change',e => {
    //console.log(e.target.value);
    datosBusqueda.marca = e.target.value;
    //console.log(datosBusqueda);
    filtrarAuto();
})

year.addEventListener('change',e => {
    //console.log(e.target.value);
    datosBusqueda.year = parseInt(e.target.value);
    //console.log(datosBusqueda);
    filtrarAuto();
})

minimo.addEventListener('change',e => {
    //console.log(e.target.value);
    datosBusqueda.minimo = e.target.value;
    //console.log(datosBusqueda);
    filtrarAuto();
})
maximo.addEventListener('change',e => {
    //console.log(e.target.value);
    datosBusqueda.maximo = e.target.value;
    //console.log(datosBusqueda);
    filtrarAuto();
})

puertas.addEventListener('change',e => {
    //console.log(e.target.value);
    datosBusqueda.puertas = parseInt(e.target.value);
    //console.log(datosBusqueda);
    filtrarAuto();
})
transmision.addEventListener('change',e => {
    //console.log(e.target.value);
    datosBusqueda.transmision = e.target.value;
    //7console.log(datosBusqueda);
    filtrarAuto();
})
color.addEventListener('change',e => {
    //console.log(e.target.value);
    datosBusqueda.color = e.target.value;
    //console.log(datosBusqueda);
    filtrarAuto();
})

//funciones
function mostrarAuto(autos){


    limpiarHTML();//limpia el html previo

    autos.forEach(auto => {

        const {marca,modelo,year,puertas,transmision, precio,color} = auto;
        const autosHTML = document.createElement('p');
        autosHTML.textContent = `
            ${marca}${modelo} - ${year} - ${puertas} - ${transmision} - ${precio} - ${color}
        `
            //insertar en el html
            resultado.appendChild(autosHTML);
    })

}

//limpiar html
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }

}

//Genera los años del select
function llenarSelect(){

    for(let i = max; i >= min ; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion)//agrega los años al select
    }
}


//funcion que filtra en base a la busqueda
function filtrarAuto(){
    //console.log("Filtrando auto....")
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas)
    .filter(filtrarTransmision).filter(filtrarColor);
    //console.log(resultado);

    if(resultado.length){
    mostrarAuto(resultado)
    }else{
        noResultado();
    }
}


function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay Resultados';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if(marca){
        return marca === auto.marca;
    }
    return auto;
}

function filtrarYear(auto){
    const { year } = datosBusqueda;
    if(year){
        return year === auto.year;
    }
    return auto;
}

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;

}

function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const { color } = datosBusqueda;
    if(color){
        return auto.color === color;
    }
    return auto;
}