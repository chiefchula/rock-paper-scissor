// Code for playing Rock-Paper-Scissors in console.

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

function getHumanChoice() {
    // human = prompt("Select one between Rock, Paper and Scissors:");
    if(document.querySelector('#rock')) {
        return "rock";
    } else if(
        document.querySelector('#paper')) {
            return "paper"
        } else {
            return "scissors";
        }
    // ) )
    // return human.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

const resultDisplay = document.querySelector("#result");
const scoreDisplay = document.querySelector("#score");


function playRound(humanChoice, computerChoice) {
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
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

document.querySelector("#rock").addEventListener("click", () => playGame("rock"));
document.querySelector("#paper").addEventListener("click", () => playGame("paper"));
document.querySelector("#scissors").addEventListener("click", () => playGame("scissors"));







