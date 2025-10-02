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

    humanChoice = getHumanChoice().toLowerCase();                       //get the human choice from the defined getHumanChoice funtion
    computerChoice = getComputerChoice().toLowerCase();                 //get the computer choice from the defined getComputerChoice funtion

    if(humanChoice === computerChoice) {
        console.log("Draw! Try Again")                                  // first condition is to capture all draws. No counter
        } else if(
            humanChoice === "rock" && computerChoice === "paper")       // for ease of debugging all condition start with human, then computer. 3 computer wins, 3 human wins
                                                                        // condition 1 - start of computer wins
        {
            console.log("Computer Wins! Paper beats Rock");
            computerScore++;
        } else if(
            humanChoice === "paper" && computerChoice === "scissors")   // conditon 2
        {
            console.log("Computer wins! Scissors beats Paper!" );
            computerScore++;
        } else if(
            humanChoice === "scissors" && computerChoice === "rock")    // condition 3 - end of computer wins
        {
            console.log("Computer Wins! Rock bears Scissors");
            computerScore++;
        } else if(
            humanChoice === "paper" && computerChoice === "rock")       // condition 4 - start of human wins
        {
            console.log("Human Wins! Paper beats Rock");
            humanScore++;
        } else if(
            humanChoice === "scissors" && computerChoice === "paper")   // condition 5
        {
            console.log("Human Wins! Scissors beats paper")
            humanScore++;
        } else if(
            humanChoice === "rock" && computerChoice === "scissors")    // condition 6 - end of humab wins
            
            {
                console.log("Human Wins! Rock Beats Scissors");         
                humanScore++;
            }
        
        
        
        else {
            console.log("Check error!")                                 // if the function runs correctly, this code block should not runs. It's a fall back to detect errors in the execution of the different conditions
        }
    
    return console.log({humanChoice, computerChoice, humanScore, computerScore});
    }

playRound();