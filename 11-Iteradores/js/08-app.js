const pendientes = [
    'tarea','comer','proyecto','estudiar javascript'
]

for( let pendiente in pendientes){
    //console.log(pendiente)
}

const auto = {
    modelo : 'camaro',
    year : '1966',
    motor :'1.6'
}

for(let propiedad in auto){
    //console.log(`${auto[propiedad]}`)
}

for(let [llave,valor] of Object.entries(auto)){
    console.log(llave)
    console.log(valor);
}