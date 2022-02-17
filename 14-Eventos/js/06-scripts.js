//event bubbling
const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click',e =>{
    e.stopPropagation();
    console.log('Click en card');
})

infoDiv.addEventListener('click',e =>{
    e.stopPropagation();
    console.log('Click en infoDiv');
})

titulo.addEventListener('click',e =>{
    e.stopPropagation();
    console.log('Click en titulo');
})