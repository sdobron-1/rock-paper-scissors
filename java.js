let humanChoice = "";
let computerChoice = "";

const btn1 = document.getElementById("rock");
btn1.addEventListener("click", getHumanChoice);

const btn2 = document.getElementById("paper");
btn2.addEventListener("click", getHumanChoice);

const btn3 = document.getElementById("scissors");
btn3.addEventListener("click", getHumanChoice);

const scoreBoard = document.querySelector("div");

function getHumanChoice() {
    if (humanScore != 5 && computerScore !=5) {
        try {humanChoice =this.value;
            return;
        } finally {
            getComputerChoice();
            playRound(humanChoice,computerChoice);
        }
   }
}

function scoreBoard(humanScore,computerScore) {

}

function getComputerChoice() {
    number = Math.random();
    if (number <=0.45) {
        computerChoice = "rock";
        return;
    } else if (number >0.45 && number <0.75) {
        computerChoice = "paper";
        return; 
    } else 
        computerChoice = "scissors";
        return;
}

    function playRound(humanChoice, computerChoice) {
        let humanScore = 0;
        let computerScore = 0;
        if (humanChoice === computerChoice) {
            scoreBoard.appendChild(document.createTextNode("\n" + `Your ${humanChoice} ties the computer's ${computerChoice}. This is a draw.`));
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            scoreBoard.appendChild(document.createTextNode("\n" + `Your ${humanChoice} beats the computer's ${computerChoice}. You win!`));
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            scoreBoard.appendChild(document.createTextNode("\n" + `Your ${humanChoice} beats the computer's ${computerChoice}. You win!`));
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            scoreBoard.appendChild(document.createTextNode("\n" + `Your ${humanChoice} beats the computer's ${computerChoice}. You win!`));
        } else {
            computerScore++;
            scoreBoard.appendChild(document.createTextNode("\n" + `The computer's ${computerChoice} beats your ${humanChoice}. You lose.`));
            }
    }

//} else if (humanScore === 5) {
//    scoreBoard.appendChild(document.createTextNode("\n" + `Your score is ${humanScore} and the computer's score is ${computerScore}. You win!`));
//    humanScore = 0;
//    computerScore = 0;
//} else if (computerScore === 5) {
//    scoreBoard.appendChild(document.createTextNode("\n" + `The computer's score is ${computerScore} and your score is ${humanScore}. You lose.`));
//    humanScore = 0;
//    computerScore = 0;
//}