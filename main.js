// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer 
// di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, tramite 
// il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
// e quali dei numeri da indovinare sono stati individuati.


//array di numeri random
let numeri = [];

//funzione numeri random
function numeriRandom(num) {
  return Math.floor(Math.random() * num) + 1;  
}

//creazione di 5 numeri random dentro array 
for (let i = 1; i <= 5; i++) { 
  let NumeriRandom = numeriRandom(50)
  numeri.push(NumeriRandom) 
   
}

let Stampa = document.getElementById("stampa");
Stampa.innerHTML += numeri

console.log(numeri);
//funzione per far scomparire i numeri
setTimeout(() => {
  Stampa.classList.add("remove"); 
}, 5000);

//funzione per far comparire 5 prompt
setTimeout(() => {
  for (let y = 0; y < 5; y++) {
    let InserisciUtente = parseInt(prompt("Inseirisci Numero"));
     NumeriUtente.push(InserisciUtente)}
}, 5030);


//arroy dei numeri inseititi dall'utente
let NumeriUtente = []
console.log(NumeriUtente);




setTimeout(() => {
  if (numeri.includes(NumeriUtente)  ) {
    console.log("preso");
  }else{
    console.log("no");
  }
}, 15000);


  
  
