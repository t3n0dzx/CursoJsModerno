const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click',e =>{
    if(e.target.classList.contains('titulo')){
        console.log('Click en card');
    }
    if(e.target.classList.contains('precio')){
        console.log('Click en precio');
    }
    if(e.target.classList.contains('card')){
        console.log('Click en card');
    }
   
})