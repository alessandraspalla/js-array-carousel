
//MILESTONE 3
//Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.



// Definisco array
const fotoLink = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

// Prendo riferimento a container
const container = document.getElementById('container');

// Prendo riferimento a bottoni
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

// Creo indice posizione dentro collezione img
let positionImg = 0;

// Genero le immagini
for (let i = 0; i < fotoLink.length; i++) {

    // Genero elemento che conterrà le img..
    const photo = document.createElement("div");

    // ..e le inserisco
    photo.innerHTML = `<img src="img/${fotoLink[i]}">`;

    // Appendo l'elemento al container
    container.append(photo);
    
}

// Seleziono le immagini 
const imgCollection = document.querySelectorAll('img');
console.log(imgCollection);

// Aggiungo la classe active al primo elemento della collezione
imgCollection[positionImg].classList.add("active");

// Collego il click al bottone next
nextBtn.addEventListener('click',
    function () {

        imgCollection[positionImg].classList.remove('active');

        if (positionImg == fotoLink.length - 1) {
            positionImg = 0;
        } else {
            positionImg++; 
        } 
        
        
        imgCollection[positionImg].classList.add('active');
    }
);

// Collego il click al bottone prev
prevBtn.addEventListener('click',
    function () {

        imgCollection[positionImg].classList.remove('active');

        if (positionImg == 0) {
            positionImg = fotoLink.length - 1;
        } else {
            positionImg--;
        }

        imgCollection[positionImg].classList.add('active');
    }
);
