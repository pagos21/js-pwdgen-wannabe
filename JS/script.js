// Chiedo all'utente il nome
var fName = prompt("Insert your name here... ");

// RegEx per controllo spazi o numeri

if (/\s/.test(fName)) {
    alert("Ci sono degli spazi nel tuo nome")
    location.reload();
}
if (/\d/.test(fName)) {
    alert("Ci sono numeri nel tuo nome?!?")
    location.reload();

}
// Chiedo il cognome
var sName = prompt("Hi " + fName + ", insert your second name here...");
// RegEx per controllo spazi o numeri
if (/\s/.test(sName)) {
    alert("Ci sono degli spazi nel tuo cognome")
    location.reload();

}
if (/\d/.test(sName)) {
    alert("Ci sono numeri nel tuo cognome?!?")
    location.reload();

}

// Chiedo il colore preferito

var fColor = prompt("Perfect! " + fName + " " + sName + " What's your favorite color?");

// Metto insieme tutto e Stampo la password

document.getElementById('d_pass').innerHTML = fName + sName + fColor + "19";
