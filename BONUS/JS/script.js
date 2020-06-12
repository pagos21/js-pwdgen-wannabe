// Caldo benvenuto!
var today = new Date()
var curTime = today.getHours()

if (curTime < 12) {
  document.getElementById('pm_am').innerHTML = "Good morning!"
} else if (curTime < 18) {
  document.getElementById('pm_am').innerHTML = "Good afternoon!"
} else {
  document.getElementById('pm_am').innerHTML = "Good evening!"
}

// Rot 13


function rot13f() {


  alert('Caesar Cipher!!!')
  var fName = prompt("Insert your name here... ")

  var sName = prompt("Hi " + fName + ", insert your second name here...")

  var fColor = prompt("Perfect! " + fName + " " + sName + " What's your favorite color?")

}
