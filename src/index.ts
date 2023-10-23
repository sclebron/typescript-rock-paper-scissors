let gameMessage = confirm("Hi! Let's play rock, paper, scissors!");

let wins: number = 0;
let losses: number = 0;
let ties: number = 0;

let game = function() {
let userChoice = prompt("Please enter rock, paper, or scissors");
console.log(userChoice);

let choices = ["rock", "paper", "scissors"];
let random = Math.floor(Math.random() * choices.length);
console.log(random, choices[random]);
let compChoice = alert("The computer chose " + choices[random]);

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
