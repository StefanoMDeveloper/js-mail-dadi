let giochiamo = prompt("Giochiamo a dadi?");

let tiroComputer;
let tiroUtente;

while (giochiamo != "si" && giochiamo != "Si" && giochiamo != "SI" ) {
    giochiamo = prompt("DEVI RISPONDERE SI!");
}

console.log("Evviva che bello \nTiro prima io.");

tiroComputer = Math.floor(Math.random()*6+1);
tiroUtente = Math.floor(Math.random()*6+1);

console.log("Io ho fatto ", tiroComputer);
console.log("Tu hai fatto ", tiroUtente);


if (tiroUtente == tiroComputer) {
    console.log("Abbiamo pareggiato!");
}else if (tiroComputer > tiroUtente) {
    console.log("Ho vinto io!!");
}else{
    console.log("Hai vinto tu. :C");
}


