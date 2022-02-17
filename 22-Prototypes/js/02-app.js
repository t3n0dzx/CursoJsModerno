function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;  
}

const juan = new Cliente('Juan',5000);


function formatearCliente(cliente){
    const {nombre,saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(cliente){
    const {nombre,saldo,categoria} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria de ${categoria}`;
}

console.log(formatearCliente(juan))



function empresa(nombre,saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const ccj = new empresa('Codigo con Juan',4000,'Cursos en Linea');

console.log(formatearEmpresa(ccj))
