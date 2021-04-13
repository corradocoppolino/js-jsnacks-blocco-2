var somma = 0;
var contatore = 1;

// con il FOR

/* for(i=1; i<=5; i++){
    var numero = parseInt(prompt("Inserisci un numero"));
    somma += numero;
    console.log(numero);
    console.log(somma);
} */

// con il WHILE

while(contatore <=5){
    var numero = parseInt(prompt("Inserisci un numero"));
    somma += numero;
    console.log(numero);
    console.log("-----------");
    contatore++;
}

console.log("La somma totale è: "+ somma);