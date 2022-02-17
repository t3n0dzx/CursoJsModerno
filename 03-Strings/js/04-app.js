const producto = "      Monitor 20 pulgadas    ";

console.log(producto);
console.log(producto.length);

//Eliminar espacio en blanco del inicio de la cadena
console.log(producto.trimStart());
//Elimina espacios en blanco al final de la cadena
console.log(producto.trimEnd());

//Elimina espacios al inicio y al final de la cadena
console.log(producto.trimStart().trimEnd());
//o
console.log(producto.trim());
