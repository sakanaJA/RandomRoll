var options = ["MID", "TOP", "JG", "SUP", "ADC"];

function chooseRandom() {
  var randomIndex = Math.floor(Math.random() * options.length);
  var randomChoice = options[randomIndex];
  document.getElementById('result').textContent = "君が行くのは: " + randomChoice;
}
