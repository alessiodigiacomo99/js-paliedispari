// Palidroma
// Chiedere all’utente di inserire una parola
var parola = prompt("inserisci parola");
// Creare una funzione per capire se la parola inserita è palindroma
var lettere = [];
function palindromi(word){
    for(var i = 0; i < word.length; i++ ){
        lettere.unshift(word.charAt(i));
        var nuovaParola = lettere.join('');
    }
    if(nuovaParola === parola){
        console.log("palindromo");
    }else{
        console.log("niente palindromo")
    }
}

palindromi(parola);


