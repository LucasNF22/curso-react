console.log('Hola Mundo!');

// Template strings

const nombre = 'Lucas';
const apellido = 'Fiorentino';

// const nombreCompleto = nombre  + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log( `Esto es un texto: ${ getSaludo(nombreCompleto) }` );