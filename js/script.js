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


// Chieder all'utente il livello del giocatore
var livelloUtente = parseInt(prompt("Dimmi a che livello vuoi giocare: da 0 a 2!"));

// Variabili che rappresentano le opzioni del gioco in base al livello scelto dall'numeroUtente
var numeroBombe = 16;
var rangeMaxNumeriRandom = calcolaRangeMaxNumeriRandom(livelloUtente);
var numeroTentativiMassimo = rangeMaxNumeriRandom - numeroBombe;

// Crea array di numeri rappresentanti le bombe
var arrayBombe = creaArrayBombe(numeroBombe, rangeMaxNumeriRandom);
console.log(arrayBombe);

// Chiedere all'utente di inserire un numero alla volta
// Se il numero è presente nella lista delle arrayBombe
// Il gioco termina e l'utente ha perso
// Continua a chiedere il numero per il numero di massimo di tentativi in base al livello
var bombaBeccata = false;
var arrayNumeriUtente = [];

while (!bombaBeccata && arrayNumeriUtente.length < numeroTentativiMassimo) {
  var numeroUtente = parseInt(prompt('Dimmi un numero da 1 a ' + rangeMaxNumeriRandom));

  // Il ciclo si blocca quando l'utente becca una bomba
  // cioè quando il numero dell'utente è presente nell'array delle bombe
  // controllo usando la funzione che controlla se un numero è presente in una lista
  var numeroPresente = controllaLista(arrayBombe, numeroUtente);
  if (numeroPresente) {
    bombaBeccata = true;
  } else {
    var numeroGiaUsato = controllaLista(arrayNumeriUtente, numeroUtente);
    if (!numeroGiaUsato) {
      arrayNumeriUtente.push(numeroUtente);
    }
  }
}
// Stampa il risultato del gioco con in numero di tentativi indovinati
if (!bombaBeccata) {
  console.log('Hai vinto!! Il tuo punteggio è ' + tentativiUtente);
} else {
  console.log('Hai perso. Il tuo punteggio è '+ arrayNumeriUtente.length);
}
console.log(arrayNumeriUtente);

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

// Funzione che mi calcola il range massimo per il livello scelto
// Argomento un numero da 0 a 2 che rappresenta il livello scelto dall'utente
// Restituisce un numero che rappresenta il numero massimo per il range dei numeri casuali
// in base alle regole del gioco
function calcolaRangeMaxNumeriRandom(livello) {
  var numeroMax;
  switch (livello) {
    case 0:
      numeroMax = 100;
      break;
    case 1:
    numeroMax = 80;
    break;
    default:
      numeroMax = 50;
  }
  return numeroMax;
}
