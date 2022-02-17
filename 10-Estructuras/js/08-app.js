const autenticado = true;

if(autenticado){
    console.log("El usuario esta logeado")
}

const puntaje = 300;

function revisaPuntaje(){
    if(puntaje > 400){
        console.log("Excelente!!!")
        return;
    }
    if(puntaje > 400){
        console.log('Buen puntaje...Felicidades');
        return;
    }
}

revisaPuntaje()
