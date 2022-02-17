/* for(let i = 0; i < 10;i++){
    console.log(`El numero es ${i}`)
} */

/* for(let i=0; i < 20;i++){
    if(i % 2 === 0){
        console.log(`El numero ${i} es par`);
    }else{
        console.log(`El numero ${i} es impar`);
    }
} */


const carrito = [
    {nombre : "MonitorV 20 pulgadas",precio : 200},
    {nombre : "MonitorW 30 pulgadas",precio : 300},
    {nombre : "MonitorY 40 pulgadas",precio : 400},
    {nombre : "MonitorX 50 pulgadas",precio : 500},
    {nombre : "MonitorZ60 pulgadas",precio : 600}
]

for(let i = 0; i< carrito.length;i++){
    console.log(carrito[i].nombre);
}