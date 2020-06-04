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

// Chiedere all'utente numero da 1 a 100
// var numeroUtente = parseInt(prompt('Dammi un numero da 1 a 100'));
// console.log(numeroUtente);


// Il computer deve generare 16 numeri casuali tra 1 e 100
// rappresentanti un array di bombe
// usa una funzione per creare l'array di numeri casuali non ripetuti
var numeroBombe = 5; // TODO: da mettere uguale a 16
var rangeMaxNumeriRandom = 5; // TODO: da mettere uguale a 100
var arrayBombe = creaArrayBombe(numeroBombe, rangeMaxNumeriRandom);


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

// Funzione che crea l'array di bombe
// Argomenti: numero di bombe e range numeri random
// Restituisce un array di numeri casuali rappresentanti le bombe
function creaArrayBombe(numeroBombe, rangeMaxNumeriRandom) {
  var arrayBombe = [];

  while (arrayBombe.length < numeroBombe) {
    var numeroCasuale = Math.floor(Math.random() * rangeMaxNumeriRandom) + 1;
    var numeroPresente = controllaLista(arrayBombe, numeroCasuale);
    if (!numeroPresente) {
      arrayBombe.push(numeroCasuale);
    }
  }
  return arrayBombe;
}


// Funzione che controlla se un numero è presente in una lista di numeri
// Argomenti: lista di numeri e numero da controllare
// Ritorna: booleano vero, se il numero è presente
function controllaLista(lista, numeroDaControllare) {
  var numeroPresente = false;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] === numeroDaControllare) {
      numeroPresente = true;
    }
  }
  return numeroPresente;
}
