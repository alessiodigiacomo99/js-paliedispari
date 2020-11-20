// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta = prompt("scegli pari o dispari");
var userNumber = Number(prompt("inserisci un numero da 1 a 5"));
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function genera (numero){
   var nRandom = Math.ceil(Math.random() * numero);
   return nRandom;
}
var computerNumber = genera(5);
console.log(computerNumber);
// Sommiamo i due numeri
var somma = userNumber + computerNumber;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var risultato;
function pari (numero){
    if(numero % 2 === 0){
        risultato = "pari";
    }else{
        risultato = "dispari";
    }
}

pari(somma);
// Dichiariamo chi ha vinto.
if (scelta === risultato ){
    console.log("hai vinto");
}else{
    console.log("hai perso");
}