function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let quien = ['Mi mama','Mi Papa','Hi perro','Mi amigo'];
let accion = ['corio','comio','se cayo','salto'];
let que = ['La pc', 'la pelota', 'el zapato'];
let cuando = ['al salir de clases','despues del trabajo','al levantarse','despues de comer','al dia siguiente'];

let excusa = quien[getRandomInt(4)] + " " + accion[getRandomInt(4)] + " " + que[getRandomInt(4)] + " " + cuando[getRandomInt(4)];

document.querySelector('.secundario').innerHTML = excusa;