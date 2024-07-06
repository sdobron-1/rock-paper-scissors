function playRound() {
    let human = getHumanChoice();
    let computer = getComputerChoice();
}

function getHumanChoice() {
    let HumanChoice = prompt("Choose Rock, Paper or Scissors.");
    return HumanChoice.toLowerCase();
}

function getComputerChoice() {
    let ComputerChoice = Math.random();
    if (ComputerChoice < 0.33) {
    return 'rock';
    } else if (ComputerChoice >0.33 && ComputerChoice <0.66) {
    return 'paper';
    } else {
    return 'scissors';
    }}