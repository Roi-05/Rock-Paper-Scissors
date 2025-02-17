let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = ['rock' , 'paper', 'scissor'];
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");
    return humanChoice;
}

playGame();
function playGame() {

    for (let round = 1; round <= 5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log((humanScore > computerScore) ? "You win!" : 
                (humanScore === computerScore) ? "Draw!" :
                                                "You Lose!");
}

function playRound(humanSelection, computerSelection) {
    const human = humanSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    const winCondition = {
        rock: 'scissor',
        paper: 'rock',
        scissor: 'paper'
    };
    if (human === computerSelection) {
        console.log("Draw");
    }
    else if (winCondition[human] === computer){
        humanScore++;
        console.log(`You win! ${human} beats ${computer}`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computer} beats ${human}`);
    }
}