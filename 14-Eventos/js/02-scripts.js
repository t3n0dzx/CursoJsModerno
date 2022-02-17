const nav = document.querySelector('.navegacion')

//registrar un evento
nav.addEventListener('click',() =>{
    console.log('click en nav');
})

nav.addEventListener('mouseout',() =>{
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent'
})

nav.addEventListener('mouseenter',() =>{
    console.log('entrando en la navegacion');
    nav.style.backgroundColor = 'white';
})