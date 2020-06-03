// Il computer deve generare 16 numeri casuali tra 1 e 100
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.


// Creare array di numeri vietati
var numeriVietati = [];

// Ciclo per popolare array di 16 numeri vietati diversi tra loro
var i = 0;
while (i < 16) {
  var numeroVietato = numeriCasuali();

  if (!(numeriVietati.includes(numeroVietato))) {
    numeriVietati.push(numeroVietato);
    i++;
  }
}


// for (var i = 0; i < 16; i++) {
//
//   numeriVietati.push(numeriCasuali());
// }
console.log(numeriVietati);

// Chiedere all'utente numero da 1 a 100
// var numeroUtente = prompt('Dammi un numero da 1 a 100');
// console.log(numeroUtente);

// Confronto numeroUtente con l'array dei numeri vietati






// Funzioni

// Funzione per creare numeri casuali da 1 a 100
// Ritorna un numero casuale da 1 a 100
function numeriCasuali() {
  var numeroCasuale = Math.floor(Math.random() * 100) + 1;
  return numeroCasuale;
}
