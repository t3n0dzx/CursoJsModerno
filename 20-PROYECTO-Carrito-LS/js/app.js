//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    //Agregar un elemento al carrito
    listaCursos.addEventListener('click',agregarCurso);

    //muestra los cursos de local storage
    document.addEventListener('DOMContentLoaded', ()=>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    })


    //Eliminar un elemento del carrito
    carrito.addEventListener('click',eliminarCurso)

    //Vaciar el carrito de compras
    vaciarCarritoBtn.addEventListener('click',() => {
        console.log("Vaciado carrito...");

        articulosCarrito = []//reseteando el arreglo

        limpiarHTML()//eliminamos todo el html
    })
    
}

function agregarCurso(e){
    e.preventDefault();
    //Visualizar que clases tienen los elementos -- e.target.classList
    if(e.target.classList.contains('agregar-carrito')){   
        //console.log('Cargando el curso Yeah!!');
        //console.log(e.target.parentElement.parentElement);
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatos(cursoSeleccionado);

    }
    
}

//eliminar un curso del carrito
function eliminarCurso(e){
    //visualizar la lista de clases que tienen los elementos
    //console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        //eliminar del arreglo
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        //console.log(articulosCarrito);
        carritoHTML();

    }
}

//Obtener el contenido del html al que le dimos click, y extraer la informacion del curso
function leerDatos(curso){
    //console.log(curso);
    //console.log(curso.querySelector('.info-card h4'))
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }
    //console.log(infoCurso);

    //Valida si ya existe un curso en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    
    if(existe){
        //Si existe actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;//retorna el objeto actualizado
            }else{
                return curso;//retorna el objeto que no esta duplicado
            }
        })
    }else{
        //Agregar articulos al arreglo del carrito
        articulosCarrito = [...articulosCarrito,infoCurso]
    }
    //console.log(articulosCarrito);

    carritoHTML();

}

//Muestra el carrito de compras
function carritoHTML(){

    //liḿpiar carrito
    limpiarHTML();


    //Recorre el carrito y genera el html
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio,cantidad,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = 
        `<td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>`

        //Agrega el contenido de row al tbody
        contenedorCarrito.appendChild(row);
    })

    sincronizarLocalStorage();
}

function sincronizarLocalStorage(){
    localStorage.setItem('carrito',JSON.stringify(articulosCarrito));
}


//limpia los elementos del tbody
function limpiarHTML(){
    //limpiar carrito de forma lenta
    //contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}