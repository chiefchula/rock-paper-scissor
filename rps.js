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

    console.log(getComputerChoice());
// console.log('Hello World');