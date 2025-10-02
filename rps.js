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
        } else if(
            humanChoice === "rock" && computerChoice === "paper")
        {
            console.log("Computer Wins! Paper beats Rock");
            computerScore++;
        } else if(
            humanChoice === "paper" && computerChoice === "scissors")
        {
            console.log("Computer wins! Scissors beats Paper!" );
            computerScore++;
        } else if(
            humanChoice === "scissors" && computerChoice === "rock")
        {
            console.log("Computer Wins! Rock bears Scissors");
            computerScore++;
        } else if(
            humanChoice === "paper" && computerChoice === "rock")
        {
            console.log("Human Wins! Paper beats Rock");
            humanScore++;
        } else if(
            humanChoice === "scissors" && computerChoice === "paper")
        {
            console.log("Human Wins! Scissors beats paper")
            humanScore++;
        } else if(
            humanChoice === "rock" && computerChoice === "scissors")
            
            {
                console.log("Human Wins! Rock Beats Scissors");
                humanScore++;
            }
        
        
        
        else {
            console.log("Check error!")
        }
    
    return console.log({humanChoice, computerChoice, humanScore, computerScore});
    }

playRound();