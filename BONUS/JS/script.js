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


function b64() {


  alert('Base64 encoder!!!')
  var fName = prompt("Insert your name here... ")

  var sName = prompt("Hi " + fName + ", insert your second name here...")

  var fColor = prompt("Perfect! " + fName + " " + sName + " What's your favorite color?")

  var b64e = btoa(fName + sName + fColor);
  alert(b64e)
  document.getElementById('b64_p').innerHTML = b64e;
}

function random_g() {
  var n_char = prompt("Quandi caratteri?");
  if (n_char < 8) {
    alert("Password troppo corta!!! Min 8");
    location.reload();
  }
  document.getElementById('random_p').innerHTML = random(n_char);
}

function random(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!£$%&/=?^;:_-@#[]{}';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
