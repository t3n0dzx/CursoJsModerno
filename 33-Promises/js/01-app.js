const paises = ['Francia','España','Portugal','Australia','Inglaterra'];


function nuevoPais(pais,callback){
    setTimeout(()=>{
        paises.push(pais);
        callback();
    },2000);
}

function monstrarPaises(){
    setTimeout( () => {
        paises.forEach(pais =>{
            console.log(pais);
        })
    },1000);
}


monstrarPaises()
nuevoPais('Alemania',monstrarPaises);