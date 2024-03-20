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
let roundsPlayed = 0;

function playRound(computerChoice, playerChoice) {
    roundsPlayed++;
    let selection = document.querySelector("#selectionOutput");
    selection.textContent = "Computer choice: " + computerChoice +
                            ". Player choice: " + playerChoice + ".";
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

function updateScreenElements(currentRound) {
    if (roundsPlayed <= 5) {
        let score = document.querySelector("#score");
        score.textContent = currentRound + 
                            " Player score: " + playerScore + 
                            ". Computer score: " + computerScore + ".";
    }
    if (roundsPlayed == 5) {
        let winner = document.querySelector("#winner");
        if (playerScore > computerScore) {
            winner.textContent = "Overall winner: Player. ";
        }
        else if (playerScore < computerScore) {
            winner.textContent = "Overall winner: Computer. ";
        }
        else {
            winner.textContent = "Overall winner: None (draw). ";
        }
        winner.textContent += "Game ended, no more input accepted.";
    }
    // Do not do anything past 5 rounds since the game ends
}

let selection = document.querySelector("#selection");
selection.addEventListener("click", (e) => {
    if (e.target.value) {
        updateScreenElements(playRound(getComputerChoice(), e.target.value));
    }
});