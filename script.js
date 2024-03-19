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

// Declare score variables globally so they can be accesssed by the playRound function
let playerScore = 0;
let computerScore = 0;

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "It was a draw.";
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")) {
                playerScore++;
                return "Player wins.";
            }
    else {
        computerScore++;
        return "Computer wins.";
    }
}


let selection = document.querySelector("#selection");
selection.addEventListener("click", (e) => {
    console.log(e.target.value);
});