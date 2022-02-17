//constructores
function seguro(marca,year,tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}


//realiza la cotizacion de los datos
seguro.prototype.cotizaSeguro = function(){
    /*
     1 = Americano 1
     2 = Asiatico 1.0
     3 = Europeo 1.35
     */

    let cantidad;
    const base = 2000;
    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    //leer el año
    const diferencia = new Date().getFullYear() - this.year;
    console.log(diferencia);

    //Cada año que la diferencia es mayor, costo va a reducir un 3%

    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /* 
        If el tipo es basico se incrementa en un 30% la poliza
        If el tipo es compleyto se incrementa en un 50% la poliza
    */
   if(this.tipo === "basico"){
       cantidad *= 1.30;
   }else{
       cantidad *= 1.50;
   }

   return cantidad;

    //console.log(cantidad);

}


//proto para la interfaz de usuario
function interfazUsuario(){}



//llenar las opciones de los años
interfazUsuario.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear(),
          min = max - 20;
    
          const selectYear = document.querySelector('#year');

          for(let i = max ; i > min;i--){
              let opcion = document.createElement('option');
              opcion.value = i;
              opcion.textContent = i;
              selectYear.appendChild(opcion)
          }
}


//muestra alertas en pantalla
interfazUsuario.prototype.mostrarMensaje = (mensaje,tipo)=>{
    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje','mt-10');
    div.textContent = mensaje;

    //Inserta en el html
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div,document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    },3000);
}


interfazUsuario.prototype.mostrarResultado = (total,seguro) => {
    
    const {marca, year, tipo } = seguro;
    
    let textoMarca;
    switch(marca){
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }
    
    //Crea el div de resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header"> Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$ ${total}</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');

    //Mostrar spinner
    const spiner = document.querySelector("#cargando");
    spiner.style.display = 'block';

    setTimeout(()=>{
        spiner.style.display = 'none';
        resultadoDiv.appendChild(div);
    },3000)    
    

}

//instanciar interfaz
const interfazU = new interfazUsuario();
//console.log(interfazU)

document.addEventListener('DOMContentLoaded',()=>{
    interfazU.llenarOpciones();//Llenar el selec con los años

})


//eventos
eventListener();
function eventListener(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit',cotizaSeguro);
}

function cotizaSeguro(e){
    e.preventDefault();

    console.log('Cotizando...')

    //lee la marca seleccionada
    const marca = document.querySelector('#marca').value;
    //console.log(tipo)

    //lee el año seleccionado
    const year = document.querySelector('#year').value;
    //console.log(tipo)

    //lee el tipo seleccionado
    const tipo = document.querySelector('input[name= "tipo"]:checked').value;
    //console.log(tipo)


    /* if(marca === "" || year === "" || tipo === ""){
        console.log("Campos vacios favor de validar");
        interfazU.mostrarMensaje('Todos los campos son obligatorios','error');
    }else{
        console.log("Campos completos");
        interfazU.mostrarMensaje("Campos llenados correctamente",'correcto');
    } */

    if(marca === "" || year === "" || tipo === ""){
        console.log("Campos vacios favor de validar");
        interfazU.mostrarMensaje('Todos los campos son obligatorios','error');
        return;
    }

    interfazU.mostrarMensaje('Cotizando...','exito');

    //Ocultar cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null){
        resultados.remove();
    }


    //instanciar el seguro
    const seguroCot = new seguro(marca,year,tipo);
    const total = seguroCot.cotizaSeguro();
    
    //utilizar el prototype que va a mandar el mensaje
    interfazU.mostrarResultado(total,seguroCot);
    
}