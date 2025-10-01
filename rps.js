function getComputerChoice() {
    let picked = Math.random();
    if(picked >= 0 && picked <= 0.33) {
        selected = "Rock";
    } else if(picked > 0.33 && picked <= 0.67) {
        selected = "Paper";
    } else {
        selected = "Scissor";
    }
    // return picked;
    return selected;
    }

function getHumanChoice() {
    human = prompt("Select one between Rock, Paper and Scissors:");
    return human.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // humanChoice = humanChoice.toLowerCase();

    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();

    if(humanChoice === computerChoice) {
        console.log("Draw! Try Again")
    } else (
        humanChoice === "rock" && computerChoice === "paper"); 
        {
            console.log("Computer Wins! Paper beats Rock");
            computerScore++;
        }
    
    return console.log({humanChoice, computerChoice})
    }

playRound();