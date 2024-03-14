/*
Rock paper scissors script
*/

/*
Random number between 0 and 2 inclusive
0 - "rock"
1 - "paper"
2 - "scissors"
*/
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return "rock";

        case 1:
            return "paper";

        default:
            return "scissors";
    }
}

let computerChoice = getComputerChoice();

// Declare the variable globally in order to avoid errors
let playerChoice;

do {
    playerChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
}
while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors");

/*
If the choices are the same, it's a draw

If player chooses rock and computer chooses scissors
Or if player chooses paper and computer chooses rock
Or if player chooses scissors and computer chooses paper
Then player wins

Otherwise, the computer wins
*/

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "It was a draw.";
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")) {
                return "Player wins.";
            }
    else {
        return "Computer wins.";
    }
}

console.log("Player chooses " + playerChoice + " and computer chooses " + computerChoice + ". " + playRound(computerChoice, playerChoice));