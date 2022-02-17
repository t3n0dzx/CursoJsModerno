iniciarApp()

function iniciarApp(){
    console.log("Iniciando app...")

    segudaFuncion();
}

function segudaFuncion(){
    console.log("Desde la segunda funcion")
    usuarioAutenticado('Alberto')
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario...espere');
    console.log(`Usuarios autenticado exitosamente: ${usuario}`);
}