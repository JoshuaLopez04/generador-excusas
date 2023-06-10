function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let quien = ['Mi mama','Mi Papa','Mi perro','Mi amigo'];
let accion = ['se corrio','se comio','se cayo','se salto'];
let que = ['La pc', 'la pelota', 'el zapato', 'la comida'];
let cuando = ['al salir de clases','despues del trabajo','al levantarse','despues de comer','al dia siguiente'];

let excusa = quien[getRandomInt(quien.length)] + " " + accion[getRandomInt(accion.length)] + " " + que[getRandomInt(que.length)] + " " + cuando[getRandomInt(cuando.length)];

document.querySelector('.secundario').innerHTML = excusa;