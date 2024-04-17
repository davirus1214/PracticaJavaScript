let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[ 2 - 2 ];
let ultimo = juegos[ juegos.length - 1 ];

console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr})
} );

// INSERTAR FINAL
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

//INSERTAR INICIO
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

//BORRAR AL FINAL
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

//BORRAR ELEMENTO EN POS EN ESPECIFICO
let pos = 1;

let juegosBorrados = juegos.splice( pos, 2);
console.log({juegosBorrados, juegos});


//SABER LA POSICION INDICE DE UN JUEGO
let metroidIndex  = juegos.indexOf('Metroid'); // CaseSensitive
console.log({metroidIndex});


//TODO: Referencia