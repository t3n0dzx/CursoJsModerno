//foreach

const pendientes = [
    'tarea','comer','proyecto','estudiar javascript'
]

pendientes.forEach( (pend,index)=>{
    console.log(`${index}:${pend}`)
})

const carrito = [
    {nombre : "MonitorV 20 pulgadas",precio : 200},
    {nombre : "MonitorW 30 pulgadas",precio : 300},
    {nombre : "MonitorY 40 pulgadas",precio : 400},
    {nombre : "MonitorX 50 pulgadas",precio : 500},
    {nombre : "MonitorZ60 pulgadas",precio : 600}
]

carrito.forEach( producto => console.log(producto.nombre));

const nuevoArreglo2 = carrito.map( (producto) => producto.nombre)

console.log(nuevoArreglo2)