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

}
// console.log(getHumanChoice());
// console.log('Hello World');