// Chiedo all'utente di inserire la parola da verificare

let word = prompt("Inserisci la parola e verifica che sia palindroma")

let reversed = reverse (word)

// Creo le condizioni

// Se la parola può essere letta anche al contrario è palindroma altrimenti non lo è

if(word === reversed){
    console.log("Questa parola è palindroma");
}else{
    console.log("La parola non è palindroma");
}

// Cre una funzione

function reverse (wordRev){


    let splitvar = wordRev.split(""); 

    //Split restituisce un array di caratteri

    let reversevar = splitvar.reverse();

    // l'array di caratteri vengono invertiti nel loro ordine

    let joinvar = reversevar.join("");

    // parte da un array di elementi, ogni singolo elemento viene agganciato al resto unisco gli elemnti e ho una stringa
    
    return joinvar;

}

// mostro nel console log il risultato

console.log(word)
console.log(reversed)
