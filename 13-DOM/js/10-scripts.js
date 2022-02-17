const enlace = document.createElement('A');

//agregando el texto
enlace.textContent = 'Nuevo Enlace';

//añadiendo href
enlace.href = '/nuevo-enlace';


console.log(enlace);


//seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);


/* enlace.textContent = 'olv'
enlace.href = '#';
const olv = document.querySelector('.navegacion');
olv.appendChild(olv) */

//crear un card de manera dinamica

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto')

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('info');

//Crea div con la clase de info
const info = document.createElement('div');
info.classList.add('info');


info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la img
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//crear card
const card = document.createElement('div');
card.classList.add('card');

//asignar info
card.appendChild(imagen)

//asignar info
card.appendChild(info)

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);