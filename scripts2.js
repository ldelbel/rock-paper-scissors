let playerOption;
let compResult;
var scorePlayer = 0;
var scoreComp = 0;
let rockOption = document.getElementById("rockicon");
let paperOption = document.getElementById("papericon");
let scissorsOption = document.getElementById("scissorsicon");
let listedOptions = ["rock", "paper", "scissors"];


let computerPlay = function () {
  compResult = listedOptions[Math.floor(Math.random()*listedOptions.length)];
}

rockOption.addEventListener('click', function (){
  playerOption = "rock";
  computerPlay();
  if(compResult == "paper") {
    scoreComp++;
    document.getElementById('info').innerHTML = "Comp has chosen 'Paper'. Comp Scores."
  }
  else if(compResult == "scissors") {
    scorePlayer++;
    document.getElementById('info').innerHTML = "Comp has chosen 'Scissors'. Player Scores."
  }
  else {
    document.getElementById('info').innerHTML = "Comp has chosen 'Rock'. Draw."
  }
  document.getElementById('scorePlayer').innerHTML = scorePlayer;
  document.getElementById('scoreComp').innerHTML = scoreComp;
});  

paperOption.onclick = function (){
  playerOption = "paper";
  computerPlay();
  if(compResult == "scissors") {
    scoreComp++;
    document.getElementById('info').innerHTML = "Comp has chosen 'Scissors'. Comp Scores."
  }
  else if(compResult == "rock") {
    scorePlayer++;
    document.getElementById('info').innerHTML = "Comp has chosen 'Rock'. Player Scores."
  }
  else {
    document.getElementById('info').innerHTML = "Comp has chosen 'Paper'. Draw."
  }
  document.getElementById('scorePlayer').innerHTML = scorePlayer;
  document.getElementById('scoreComp').innerHTML = scoreComp;
}

scissorsOption.onclick = function (){
  playerOption = "scissors";
  computerPlay();
  if(compResult == "rock") {
    scoreComp++;
    document.getElementById('info').innerHTML = "Comp has chosen 'Rock'. Comp Scores."
  }
  else if(compResult == "paper") {
    scorePlayer++;
    document.getElementById('info').innerHTML = "Comp has chosen 'Paper'. Player Scores."
  }
  else {
    document.getElementById('info').innerHTML = "Comp has chosen 'Scissors'. Draw."
  }
  document.getElementById('scorePlayer').innerHTML = scorePlayer;
  document.getElementById('scoreComp').innerHTML = scoreComp;
}