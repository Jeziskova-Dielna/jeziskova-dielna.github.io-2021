console.log("Ahoj!")
console.log("Tešíš sa na vianoce?")
console.log("Ja áno!!")
console.log("|")
console.log("|")
console.log("|")
console.log("Túto webstránku spravil oliminator")
var countDownDate = new Date("November 1, 2021 19:45:15").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("odpocet").innerHTML = days + "d  " + hours + "h "
  + minutes + "m  " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("odpocet").innerHTML = "OTVÁRAME!!!!!";
  }
}, 1000);