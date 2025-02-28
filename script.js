let humanScore = 0;
let computerScore = 0;

const divResult = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

function getComputerChoice () {
    const choices = ['rock' , 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * 3)];
}


    buttons.forEach((button) => {
        button.addEventListener("click" , () => {
            playRound(button.id, getComputerChoice());
        })
    });


function playRound (humanSelection , computerSelection) {

    const winCondition = {
        rock : 'scissor',
        paper : 'rock',
        scissor : 'paper'
    };

    if (winCondition[humanSelection] === computerSelection) {
        humanScore++;
        divResult.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
    }
    else if (humanSelection === computerSelection) {
        divResult.textContent = "Draw";
    }
    else {
        computerScore++;
        divResult.textContent = `You lose! ${computerSelection} beats ${humanSelection}`;
    }
    updateScore();

    if (computerScore === 5) {
        divResult.textContent = "YOU LOSE!"
        updateScore();
        humanScore = 0, computerScore = 0;
    }
    else if (humanScore === 5) {
        divResult.textContent = "YOU WIN!"
        updateScore();
        humanScore = 0, computerScore = 0;
    }
}

function updateScore () {
    const score = document.createElement("p");
    score.textContent += `Score: Human = ${humanScore} ------ ${computerScore} = Computer`;
    divResult.appendChild(score);
}