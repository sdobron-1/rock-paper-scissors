let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;

const btn1 = document.getElementById("rock");
btn1.addEventListener("click", getHumanChoice);

const btn2 = document.getElementById("paper");
btn2.addEventListener("click", getHumanChoice);

const btn3 = document.getElementById("scissors");
btn3.addEventListener("click", getHumanChoice);

const resultOutput = document.getElementById("resultOutput");

function getHumanChoice() {
        try {humanChoice =this.value;
            return;
        } finally {
            getComputerChoice();
            playRound(humanChoice,computerChoice);
        }
   }

function scoreBoard() {
    if (humanScore === 5) {
        alert("Human has scored 5 and wins the match! Resetting the Game.");
        reset();
        return;
    } else if (computerScore === 5) {
        alert("Computer has scored 5 and wins the match. Try again.")
        reset ();
        return;
    } else document.getElementById("runningScore").innerText=`HUMAN: ${humanScore} COMPUTER: ${computerScore}`;
        return;
    }

function getComputerChoice() {
    number = Math.random();
    if (number <=0.33) {
        computerChoice = "rock";
        return;
    } else if (number >0.33 && number <0.66) {
        computerChoice = "paper";
        return; 
    } else 
        computerChoice = "scissors";
        return;
}

    function playRound() {
        if (humanChoice === computerChoice) {
            resultOutput.appendChild(document.createTextNode("\n" + `Your ${humanChoice} ties the computer's ${computerChoice}. This is a draw.`));
            scoreBoard (humanScore, computerScore);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            ++humanScore;
            resultOutput.appendChild(document.createTextNode("\n" + `Your ${humanChoice} beats the computer's ${computerChoice}. You win!`));
            scoreBoard (humanScore, computerScore);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            ++humanScore;
            resultOutput.appendChild(document.createTextNode("\n" + `Your ${humanChoice} beats the computer's ${computerChoice}. You win!`));
            scoreBoard (humanScore, computerScore);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            ++humanScore;
            resultOutput.appendChild(document.createTextNode("\n" + `Your ${humanChoice} beats the computer's ${computerChoice}. You win!`));
            scoreBoard (humanScore, computerScore);
        } else {
            ++computerScore;
            resultOutput.appendChild(document.createTextNode("\n" + `The computer's ${computerChoice} beats your ${humanChoice}. You lose.`));
            scoreBoard (humanScore, computerScore);
            }
    }

    function reset() {
        runningScore.textContent ="";
        document.getElementById("resultOutput").textContent ="";
        humanScore = 0;
        computerScore = 0;
        return;
    }