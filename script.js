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

/*
Declare playerChoice outside of loop in order to avoid errors
Keep prompting user for choice until an appropriate value is given
Return that value
*/

function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
    }
    while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors");
    return playerChoice;
}

// Declare score variables globally so they can be accesssed by the playRound function
let playerScore = 0;
let computerScore = 0;

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
                playerScore++;
                return "Player wins.";
            }
    else {
        computerScore++;
        return "Computer wins.";
    }
}

/*
Use a for loop that repeats 5 times in order to play 5 rounds
At the end, figure out who won the most rounds and print the winner
*/

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        console.log("Player chooses " + playerChoice + " and computer chooses " + computerChoice + ". " + playRound(computerChoice, playerChoice));
    }

    if (playerScore > computerScore) {
        console.log("Overall winner: Player");
    }
    else if (computerScore > playerScore) {
        console.log("Overall winner: Computer");
    }
    else {
        console.log("Overall winner: None");
    }
}

playGame();