let humanScore = 0;
let computerScore = 0;
let i = 0;
playGame();
function playGame () {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Your ${humanChoice} ties the computer's ${computerChoice}. This is a draw.`);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log(`Your ${humanChoice} beats the computer's ${computerChoice}. You win!`);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log(`Your ${humanChoice} beats the computer's ${computerChoice}. You win!`);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log(`Your ${humanChoice} beats the computer's ${computerChoice}. You win!`);
        } else {
            computerScore++;
            console.log(`The computer's ${computerChoice} beats your ${humanChoice}. You lose.`);
        }
    }
    if (i < 5) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice,computerChoice);
        i++;
        playGame();
    } else
    console.log(`The final score is Human: ${humanScore}, Computer: ${computerScore}`);    
}

function getComputerChoice() {
    number = Math.random();
    if (number <0.33) {
        return "rock";
    } else if (number >0.33 && number <0.66) {
        return "paper"; 
    }else 
        return "scissors";
}

function getHumanChoice() {
    choice = prompt("Choose rock, paper or scissors.");
    let choiceArray = new Array();
        choiceArray[0] = "rock";
        choiceArray[1] = "paper";
        choiceArray[2] = "scissors";
    if (choiceArray.includes(choice.toLowerCase())) {
        return choice.toLowerCase();
    } else
        alert("Please enter only rock, paper or scissors.");
        getHumanChoice();
        return choice.toLowerCase();
    }