const dinero = 1000;
const totalPagar = 300;
const tarjeta = false;

if( dinero >= totalPagar){
    console.log("Si podemos pagar");
}else if(tarjeta){
    console.log("Si puedo pagar por que tengo la tarjeta");
}else{
    console.log("Fondos Insuficientes");
}