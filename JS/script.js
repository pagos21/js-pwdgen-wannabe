// Chiedo all'utente il nome
var fName = prompt("Insert your name here... ")

// Chiedo il cognome
var sName = prompt("Hi " + fName + " insert your second name here...")

// Chiedo il colore preferito

var fColor = prompt("Perfect " + fName + " " + sName + " What's your favorite color?")

// Metto insieme tutto e Stampo la password

document.getElementById('d_pass').innerHTML = fName + sName + fColor + "19"
