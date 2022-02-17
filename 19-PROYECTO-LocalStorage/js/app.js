//variables
const formulario = document.querySelector('#formulario');
const agregar = document.querySelector('#lista-tweets')
let tweets = []

//eventos
eventListeners()
function eventListeners(){
    //el usuario agrega un nuevo tweet
    formulario.addEventListener('submit',agregarTweet);

    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded',() => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);

        crearHtml();
    })
}


//funciones

function agregarTweet(e){
    e.preventDefault();
    
    //text area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    if(tweet === ''){
        mensajeError ('El tweet no puede ir vacio')
        return; //Evita que mas lineas de codigo se ejecuten
    }

    const tweetObj = {
        id : Date.now(),
        tweet
    }

    //Agregando el tweet
    tweets = [...tweets,tweetObj];
    console.log(tweets)

    //Crea html para tweet
    crearHtml();

    //reiciando el formulario
    formulario.reset();
}


//Mostrando mensaje de error 
function mensajeError(msj){

    const mensajeError = document.createElement('p');
    mensajeError.textContent = msj;
    mensajeError.classList.add('error');


    //insertar al contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(()=>{
        mensajeError.remove();
    },3000)


}

//muestra tweets
function crearHtml(){
    limpiarHtml();
    
    if( tweets.length > 0){//Validamos que el array tenga mas de 1 tweet
        tweets.forEach(tweet =>{
            //agregar boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'x';

            //funcion eliminar tweet
            btnEliminar.onclick = () => {
                eliminarTweet(tweet.id);
            }

            const li = document.createElement('li');//creamos el elemento lista o li
            li.textContent = tweet.tweet; //Insertamos el texto
            li.appendChild(btnEliminar);//agrega el boton de eliminar
            agregar.appendChild(li);//agregamos al html
            
        })
    }
    sincronizarStorage();

}


function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));
}


//funcion eliminar twwet
function eliminarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    console.log("Eliminando tweet...",id);
    crearHtml();

}

//limpiar array o html
function limpiarHtml(){
    while(agregar.firstChild){
        agregar.removeChild(agregar.firstChild);
    }
}