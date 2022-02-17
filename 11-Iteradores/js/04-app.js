//while

let i = 1;//Inicializar el while

/* while(i < 10){//condicion
    console.log(`Numero ${i}`)
    i++;
}
 */
while(i < 100){//condicion
    if(i % 15 === 0){
        console.log(`${i} - Fizz buzz`)
    }
    else if(i % 3 === 0){
        console.log(`${i} - Fizz`)
    }
    else if(i % 5 === 0){
        console.log(`${i} - buzz`)
    }

    i++;//Incremento

}