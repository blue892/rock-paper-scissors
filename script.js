/*
Rock paper scissors script
*/

// Make global variable for computer choice
let computerChoice;

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
            computerChoice = "rock";
            break;

        case 1:
            computerChoice = "paper";
            break;

        default:
            computerChoice = "scissors";
    }
}

// Declare the variable globally in order to avoid errors
let playerChoice;

do {
    playerChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
}
while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors");