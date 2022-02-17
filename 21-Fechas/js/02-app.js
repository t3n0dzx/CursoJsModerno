const diaHoy = new Date();

moment().local('es');

console.log(moment().format('MMMM DD YYYY h:mm:ss'));

console.log(moment().format('LLLL',diaHoy));

console.log(moment().add(3,'days').calendar());