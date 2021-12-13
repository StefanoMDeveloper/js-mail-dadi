let email = prompt("Inserisci al tua mail per vedere se puoi accedere al sito");
let trovato = false;
let emailConosciute = ["gianmarco_gianmarchini@hotmail.it", "banana33@gmail.com", "ehzbn3.laurence@libero.it", "mailtemporanea96@gmail.com"];

for (i = 0; i <= emailConosciute.length; i++) {
    if (email == emailConosciute[i]) {
        document.writeln("Bentornato su Nonciclopedia.org/Segreti-Di-Stato/Dove-Finiscono-I-Calzini-Persi-Nella-Lavatrice");
        console.log("Bentornato su Nonciclopedia.org/Segreti-Di-Stato/Dove-Finiscono-I-Calzini-Persi-Nella-Lavatrice");
        trovato = true;
    }
}

if(!trovato){
    document.writeln("Mi dispiace la mail inserita non è presente nel nostro archivio, controlli di averla inserita corrtettamente, se dovesse sbagliare altre 2 volte la contatterà il servizio clienti per porre fine alle sue sofferenze.");
    console.log("Mi dispiace la mail inserita non è presente nel nostro archivio, controlli di averla inserita corrtettamente, se dovesse sbagliare altre 2 volte la contatterà il servizio clienti per porre fine alle sue sofferenze.");

}