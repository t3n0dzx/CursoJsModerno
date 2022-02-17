//variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn')
const formulario = document.querySelector('#enviar-mail')
//Variables de campos
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')

const exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

eventListeners();
function eventListeners(){
    //Arranca app
    document.addEventListener('DOMContentLoaded',iniciarApp);

    //campos del formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);

    //Reiniciar formulario
    btnReset.addEventListener('click',resetFomulario);

    //enviar email
    formulario.addEventListener('submit',enviarEmail);
}


//Funciones
function iniciarApp(){
    console.log('Iniciando App...');
    btnEnviar.disable = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

//Valida el formulario
function validarFormulario(e){
    console.log('validando formulario');

    if(e.target.value.length > 0){

        //eliminando los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
        

        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border','border-green-500');
    }else{
        e.target.classList.remove('border','border-green-500');
        e.target.classList.add('border','border-red-500')

        mostrarError("Todos los campos son obligatorios");
    }

    //Validar el email
        
    //Esta es una forma simple de validar un email
    //const emailCorrecto = e.target.value.indexOf('@')

    //Esta es una forma mas profesional de validar un email
    if(e.target.type === "email"){
        
        
        if(exp.test(e.target.value)){

            //eliminando los errores
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }

            e.target.classList.remove('border','border-red-500');
            e.target.classList.add('border','border-green-500');
        }else{
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500')

            mostrarError("Email invalido");
        }

    }


    if(exp.test(email.value) && asunto.value && mensaje.value){
        console.log('pasaste la validacion');
        btnEnviar.disable = false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
    }else{
        console.log('faltan campos por validar');
    }

}

function mostrarError(mensaje){
    const mostrarError = document.createElement('p');
    mostrarError.textContent = mensaje;
    mostrarError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-5','text-center','error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mostrarError);
    }
}

function enviarEmail(e){
    e.preventDefault();

    //mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //Despuest de 3 segundo ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        console.log('mostrando el spinner cada 3 segundos');
        spinner.style.display = 'none';


        //Mensaje de envio de email correcto
        const parrafo = document.createElement('p');
        parrafo.textContent = "El email se envio correctamente";
        parrafo.classList.add('text-center','my-10','p2','bg-green-500','text-white','font-bold','uppercase')
        
        //insertar el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        setTimeout(()=>{
            parrafo.remove();//elimina el mensaje de exito

            resetFomulario();
        },5000)

    },3000);
}


//funcion para resetear el formulario
function resetFomulario(){
    formulario.reset();

    iniciarApp();
}