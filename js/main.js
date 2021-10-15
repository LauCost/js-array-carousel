
const items = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//Seleziona contenitore dell'immagine da far vedere
let contenitore = document.querySelector(".cont_img");


let immagine = items[0];

let titolo = title[0];

const imma = `<img src="${immagine}" alt="${titolo}">`;

contenitore.innerHTML = imma;



let cont = document.querySelector(".img")

//Ciclo for per rappresentare tutte le img sul lato
for (i = 0; i < items.length; i++) {

    const img = items[i];

    let titolo = title[i];

    const immagine = `<img src="${img}" alt="${titolo}">`;

    cont.innerHTML += immagine;

}

let piu = document.querySelector(".top");

piu.addEventListener(`click`, function () {

    var i = 0; i++;

    let immagine = items[i];

    let titolo = title[0];

    const imma = `<img src="${immagine}" alt="${titolo}">`;

    contenitore.innerHTML = imma;
})