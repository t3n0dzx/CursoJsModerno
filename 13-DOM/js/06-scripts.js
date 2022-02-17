const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText)


const nuevoHeading = "Hola perros.. o lvr";
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'
console.log(imagen)