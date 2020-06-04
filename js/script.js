// Il computer deve generare 16 numeri casuali tra 1 e 100
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50


// // Chiedere all'utente numero da 1 a 100
// var numeroUtente = parseInt(prompt('Dammi un numero da 1 a 100'));
// console.log(numeroUtente);


// Chieder all'utente un livello di difficoltà
var difficolta = prompt('Dimmi quanto la difficoltà: 0, 1 o 2?');
console.log(difficolta);

// Creare array di numeri vietati in base alla difficoltà
// Usa la funzione per creare numeri random tra due numeri compresi
var arrayNumeriVietati = [];
var i = 0;
while (i < 16) {
  if (difficolta == 0) {
    var numeroVietato = numeriCasuali(1, 100);
  } else if (difficolta == 1) {
    var numeroVietato = numeriCasuali(1, 80);
  } else if (difficolta == 2) {
    var numeroVietato = numeriCasuali(1, 50);
  }

  if (!(arrayNumeriVietati.includes(numeroVietato))) {
    arrayNumeriVietati.push(numeroVietato);
    i++;
  }
}
console.log(arrayNumeriVietati);


// Ciclo per popolare array di 16 numeri vietati diversi tra loro
// Usa la funzione per creare numeri cauali da 1 a 100
// var i = 0;
// while (i < 16) {
//   var numeroVietato = numeriCasuali(1, 100);
//
//   if (!(arrayNumeriVietati.includes(numeroVietato))) {
//     arrayNumeriVietati.push(numeroVietato);
//     i++;
//   }
// }
// console.log(arrayNumeriVietati);



// // Confronto numeroUtente con l'array dei numeri vietati
// // Usa funzione che controlla se un numero è presente in una lista
// var numeroPresente = controllaLista(arrayNumeriVietati,numeroUtente);
// var listaNumeriValidi = [];
//
// var j = 0;
// while (j < 84 && !numeroPresente) {
//   listaNumeriValidi.push(numeroUtente);
//   numeroUtente = parseInt(prompt('Vai avanti: dammi un altro numero da 1 a 100'));
//   numeroPresente = controllaLista(arrayNumeriVietati,numeroUtente);
//   console.log(numeroUtente);
// }
// // Comunicare il punteggio
// console.log( 'Hai perso: hai azzeccato ' + listaNumeriValidi.length  + ' numeri validi!!');

// FUNZIONI

// Funzione che produce numri random tra du valori con estremi inclusi
// Argomenti: i due estremi
function numeriCasuali(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

// Funzione che controlla se un numero è presente in una lista di numeri
// Argomenti: lista di numeri e numero da controllare
// Ritorna: booleano vero, se il numero è presente
function controllaLista(lista, numero) {
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      return true;
    }
  }
}
