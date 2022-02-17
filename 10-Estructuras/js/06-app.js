const usuario = true;
const puedoPagar = false;

if( usuario && puedoPagar){
    console.log("Usuario validado , saldo suficiente , Si puedes comprar")
}else if(!usuario && !puedoPagar){
    console.log('Usuario invalido, no puedes comprar')
}else if(!usuario){
    console.log('Inicia sesion o crea una cuenta')
}else if(!puedoPagar){
    console.log('Fondos insuficientes')
}else{
    console.log('No puedo hacer nada por ti')
}