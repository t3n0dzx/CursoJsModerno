const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit',validaFormulario);

function validaFormulario(e){
    e.preventDefault();

    console.log('Buscando...');
    console.log(e.target.action);
    console.log(e.target.method);
}