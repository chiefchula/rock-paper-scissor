// Code for playing Rock-Paper-Scissors in console.
let humanScore = 0;
let computerScore = 0;
let round = 0;
const totalRounds = 5;

const resultDisplay = document.querySelector("#result");
const scoreDisplay = document.querySelector("#score");
const messageDisplay = document.querySelector("#winner");

function getComputerChoice() {
    let picked = Math.random();
    if(picked >= 0 && picked <= 0.33) {
        selected = "Rock";
    } else if(picked > 0.33 && picked <= 0.67) {
        selected = "Paper";
    } else {
        selected = "Scissors";
    }
    // return picked;
    return selected.toLowerCase();
    }



function playRound(humanChoice, computerChoice) {
    let message;

    if(humanChoice === computerChoice) {
        message = `Draw! Play Again! Both selected ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        message = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        message = `Computer win! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    resultDisplay.textContent = message;
    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}


function playGame(humanChoice) {
    if(round >= totalRounds) {
        messageDisplay.textContent = "Game Over! Refresh to play again";
        return;
    }

    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    round++;

    if (round === totalRounds) {
        displayWinner();
    }
}

function displayWinner() {
    if (humanScore > computerScore) {
        messageDisplay.textContent = `Human wins the game! Final score! Human: ${humanScore} - ${computerScore} Computer`
    } else if (computerScore > humanScore) {
        messageDisplay.textContent = `Computer wins the game! Final Score! Human: ${humanScore} - ${computerScore} Computer`
    } else {
        messageDisplay.textContent = `It's a draw! Final Score: Human: ${humanScore} - ${computerScore} Computer`
    }
}




document.querySelector("#rock").addEventListener("click", () => playGame("rock"));
document.querySelector("#paper").addEventListener("click", () => playGame("paper"));
document.querySelector("#scissors").addEventListener("click", () => playGame("scissors"));