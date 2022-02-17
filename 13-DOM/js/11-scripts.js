const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

//Esta es una manera de pasarle eventos y una funcion 
/* btnFlotante.addEventListener('click',() =>{
    console.log('Diste click en el boton');
}) */

btnFlotante.addEventListener('click',mostrarOcultarFooter);

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idiomas y Moneda';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar'
    }
    //console.log('Diste click en el botonn')
}