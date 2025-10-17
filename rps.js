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
            return "scissor";
        }
    // ) )
    // return human.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log("Draw! Play Again");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    console.log({humanScore, computerScore});
}



function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

document.querySelector("#rock").addEventListener("click", () => playGame("rock"));
document.querySelector("#paper").addEventListener("click", () => playGame("paper"));
document.querySelector("#scissor").addEventListener("click", () => playGame("scissor"));





