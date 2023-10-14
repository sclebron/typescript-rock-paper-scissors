var game = confirm("Hi! Let's play rock, paper, scissors!");

var wins = 0;
var losses = 0;
var ties = 0;

var game = function(){
var userChoice = prompt("Please enter rock, paper, or scissors");
console.log(userChoice);

var choices = ["rock", "paper", "scissors"];
var random = Math.floor(Math.random() * choices.length);
console.log(random, choices[random]);
var compChoice = alert("The computer chose " + choices[random]);

if (userChoice === choices[random]) {
    alert("It's a tie!");
    ties++;
} 
else if (userChoice === "rock" && choices[random] === "paper") {
    alert("You lost :(");
    losses++;
} 
else if (userChoice === "paper" && choices[random] === "scissors") {
    alert("You lost :(");
    losses++;
}
else if (userChoice === "scissors" && choices[random] === "rock") {
    alert("You lost :(");
    losses++;
}
else {
    alert("You won!!! :)");
    wins++;
}

alert(
    "Scoreboard" + "\n" + "Wins: " + wins + "\n" + "Losses: " + losses + "\n" + "Ties: " + ties);

var playAgain = confirm("Do you want to play again?")

if (playAgain) {
    game();
}
}
game ()