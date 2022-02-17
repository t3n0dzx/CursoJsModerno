import { nombreCliente,ahorro,monstrarInformacion,tieneSaldo,Cliente } from "./cliente.js";
import {Empresa} from './empresa.js';

console.log(nombreCliente);
console.log(ahorro);

console.log(monstrarInformacion(nombreCliente,ahorro));

tieneSaldo(ahorro);


const cliente = new Cliente(nombreCliente,ahorro);

//console.log(cliente)


//console.log(cliente.mostrarInfo)



const empresa = new Empresa('codigo con Betoz',100,'Aprendizaje en Línea');
console.log(empresa.mostrarInfo);