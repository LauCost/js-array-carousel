
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

let i = 0

let immagine = items[0];

let titolo = title[0];

let txt = text[0];

//Crea l'immagine di partenza
const imma = `<img src="${immagine}" alt="${titolo}">`;

//Crea il testo di partenza
const testo = ` <h1> ${titolo} </h1> <p> ${txt} </p> `

//Stampa sia l'immagine che il testo 
contenitore.innerHTML += imma + testo;



let cont = document.querySelector(".img_laterale")

//Ciclo for per rappresentare tutte le img sul lato
for (i = 0; i < items.length; i++) {

    const immagine = items[i];

    let titolo = title[i];

    //Aggiunge la classe attivo alla prima img laterale
    if (i == 0) {
        const immagine_laterale = `<img class="n attivo" src="${immagine}" alt="${titolo}">`;

        cont.innerHTML += immagine_laterale;

        //Stampa le img senza classe attivo
    } else {

        const immagine_laterale = `<img class="n" src="${immagine}" alt="${titolo}">`;

        cont.innerHTML += immagine_laterale;
    }



}

//Seleziona le classi img laterali
const acc = document.getElementsByClassName("n");

//Seleziona il bottone bottom
let piu = document.querySelector(".bottom");

//Aggiunge un evento quando si clicca sul bottone bottom
piu.addEventListener(`click`, function () {

    //Incrementa il valore di i per far cambiare l'immagine con quella seguente
    i++

    //Limita il valore massiomo che può avere la i per far si che non fuoriesce dall'arrey
    if (i > 4) {

        //Superato il valore massimo, la i viene resettata a 0
        i = 0;
    }

    //Assegna un nuovo valore al let prendedolo lalla lista items in base alla i
    let immagine = items[i];

    //Assegna un nuovo valore al let prendedolo lalla lista title in base alla i
    let titolo = title[i];

    //Assegna un nuovo valore al let prendedolo lalla lista text in base alla i
    let txt = text[i];

    //Crea una nuova costante in base al valore di immagine e titolo
    const cambia_immagine = `<img src="${immagine}" alt="${titolo}">`;

    //Crea una nuova costante in base al valore di titolo e txt
    const testo = ` <h1> ${titolo} </h1> <p> ${txt} </p> `

    //Stampa la nuova immagine insieme al suo titolo ed il suo testo
    contenitore.innerHTML = cambia_immagine + testo;

    //Seleziona la query con classe attivo e la rimuove
    document.querySelector('.n.attivo').classList.remove('attivo');

    //Seleziona l'elemento img laterale in base alla sua i e aggiunge la classe attivo
    document.getElementsByClassName('n')[i].classList.add('attivo');

})


//Seleziona il bottone top
let meno = document.querySelector(".top");

//Aggiunge un evento quando si clicca sul bottone top
meno.addEventListener(`click`, function () {

    //Decrementa il valore di i per far cambiare l'immagine con quella seguente
    i--

    //Limita il valore minimo che può avere la i per far si che non fuoriesce dall'arrey
    if (i < 0) {

        //Superato il valore minimo, la i viene resettata a 4
        i = 4
    }

    //Assegna un nuovo valore al let prendedolo lalla lista items in base alla i
    let immagine = items[i];

    //Assegna un nuovo valore al let prendedolo lalla lista title in base alla i
    let titolo = title[i];

    //Assegna un nuovo valore al let prendedolo lalla lista text in base alla i
    let txt = text[i];

    //Crea una nuova costante in base al valore di immagine e titolo
    const imma = `<img src="${immagine}" alt="${titolo}">`;

    //Crea una nuova costante in base al valore di titolo e txt
    const testo = ` <h1> ${titolo} </h1> <p> ${txt} </p> `

    //Stampa la nuova immagine insieme al suo titolo ed il suo testo
    contenitore.innerHTML = imma + testo;

    //Seleziona la query con classe attivo e la rimuove
    document.querySelector('.n.attivo').classList.remove('attivo');

    //Seleziona l'elemento img laterale in base alla sua i e aggiunge la classe attivo
    document.getElementsByClassName('n')[i].classList.add('attivo');


})