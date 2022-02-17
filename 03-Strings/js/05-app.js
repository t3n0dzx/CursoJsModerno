const producto = "Monitor 20 pulgadas";

//.replace() Reemplazar un texto de una cadena
console.log(producto);
console.log(producto.replace("pulgadas",'"'));
console.log(producto.replace("Monitor","Monitor Curvo"));

//.slice() Cortar una cadena
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

//.substring alternativa de slice
console.log(producto.substring(0,10))
console.log(producto.substring(2,1))


//Ejemplo de como aparecen las iniciales en tus cuentas de correo y redes sociales
const usuario = "Alberto Tenorio";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
