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
let i
//creazione di 5 numeri random dentro array 
for (i = 0; i < 5; i++) {
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

//arroy dei numeri inseititi dall'utente
let NumeriUtente = [];


//funzione per far comparire 5 prompt
setTimeout(() => {
  for (let y = 0; y < 5; y++) {


    let InserisciUtente = parseInt(prompt("Inseirisci Numero"));
    NumeriUtente.push(InserisciUtente)
  }

}, 5030);


//quali numeri ho indovinato
let controllo = document.getElementById("stampacontrollo")


//quantio numeri ho indovinato
let stampaCalcolo = document.getElementById("stampacalcolo")
let calcolo = 0


// controllo dei numeri uguali tra quelli inseriti e quelli random
setTimeout(() => {
  console.log(NumeriUtente);
  controllo.innerHTML += `I numeri indovinati sono :`

  if (NumeriUtente.includes(numeri[0])) {
    console.log("preso")
    controllo.innerHTML += ` ${numeri[0]}  `
    calcolo++
  } else {
    console.log("sbagliato");
  }
  if (NumeriUtente.includes(numeri[1])) {
    console.log("preso")
    controllo.innerHTML += ` ${numeri[1]} `
    calcolo++
  } else {
    console.log("sbagliato");
  }
  if (NumeriUtente.includes(numeri[2])) {
    console.log("preso")
    controllo.innerHTML += ` ${numeri[2]} `
    calcolo++
  } else {
    console.log("sbagliato");
  }
  if (NumeriUtente.includes(numeri[3])) {
    console.log("preso")
    controllo.innerHTML += ` ${numeri[3]} `
    calcolo++
  } else {
    console.log("sbagliato");
  }
  if (NumeriUtente.includes(numeri[4])) {
    console.log("preso")
    controllo.innerHTML += ` ${numeri[4]} `
    calcolo++
  } else {
    console.log("sbagliato");
  }

  stampaCalcolo.innerHTML = `Hai indovinato: ${calcolo} numeri`
}, 10000)


