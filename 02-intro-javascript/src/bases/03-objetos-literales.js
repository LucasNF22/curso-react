console.log('Hola Mundo!');

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 12354,
        lat: 12.3456,
        long: 3.547,
    }
};

const persona2 = { ...persona }
persona2.nombre = 'Peter';


console.log( persona );
console.log( persona2 );
