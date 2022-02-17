const pendientes = [
    'tarea','comer','proyecto','estudiar javascript'
]


const carrito = [
    {nombre : "MonitorV 20 pulgadas",precio : 200},
    {nombre : "MonitorW 30 pulgadas",precio : 300},
    {nombre : "MonitorY 40 pulgadas",precio : 400},
    {nombre : "MonitorX 50 pulgadas",precio : 500},
    {nombre : "MonitorZ60 pulgadas",precio : 600}
]


for( let pendiente of pendientes){
    console.log(pendiente)
}

for(let producto of carrito){
    console.log(producto.nombre)
}