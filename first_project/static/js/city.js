var nameInput   = document.getElementById("name");

var cityNames = ["Boston", "New York", "Paris", "Rome", "Cambridge", "London", "Amsterdam", "Manhattan", "Denvers", "Brighton", "Quincy", "Braintree", "Somerville", "New Delhi", "Mumbai"];
var name = cityNames[Math.floor(Math.random() * cityNames.length)];

function Randomizer() {
    name = cityNames[Math.floor(Math.random() * cityNames.length)];

    message = " Random City Name -->  " + name;
    document.getElementById("text").innerHTML = message;
  }
