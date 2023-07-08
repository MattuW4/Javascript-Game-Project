const choices = [{
    name: 'rock',
    image: './assets/images/Rock.png',
    beats: 'scissors'
},
{
    name: 'paper',
    image: './assets/images/Paper.png',
    beats: 'rock',
},
{
    name: 'scissors',
    image: './assets/images/Scissors.png',
    beats: 'paper'
}
];

let playRound = document.querySelector(".roundNumber");

//Variable declarations
const modal = document.getElementById("my-modal");
const openModal = document.getElementById("open-modal-button");
const closeModal = document.querySelector(".return-button");

/**  Modal open and hide */
openModal.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);

/** Show modal function */
function showModal() {
    modal.style.display = "block";
}

/** Hide modal function */
function hideModal() {
    modal.style.display = "none";
}
// Main game 

const buttons = document.querySelectorAll(".player-weapon-choice-button");

for (let button of buttons) {
    button.addEventListener("click", function () {
        let userChoice = this.getAttribute("data-choice");
        let userOption = choices.find(choice => choice.name === userChoice);
        console.log(userChoice);

        runGame(userOption);
    });
}

function computerRandomChoice() {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(randomChoice.name);
    return randomChoice;
}

function runGame(userOption) {
    let computerOption = computerRandomChoice();
    let computerSelection = computerOption.name;
    let userSelection = userOption.name;
    console.log(userOption, computerOption);

    if (userSelection === computerSelection) {
        drawResult(userSelection, computerSelection);
    } else {
        let userWins = whoWins(userOption, computerSelection);

        if (userWins) {
            winnerUser(userSelection, computerSelection);
            scoreUser();
        } else {
            winnerComputer(userSelection, computerSelection);
            scoreComputer();
        }
    }
    roundGame(userSelection, computerSelection);
}

function whoWins(selection, nameSelected) {
    let options = selection.beats;
    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        if (option === nameSelected) {
            return true;
        }
    }
}

function drawResult(user, computer) {
    arenaVictorOutput.innerText = "draw";
}

function roundGame(user, computer) {
    if (user && computer) {
        let incrementRound = parseInt(roundNumber.innerText);
        roundNumber.innerText = ++incrementRound;

        if (incrementRound === 5) {
            document.getElementById(roundNumber).innerText = "Game over";

        }
    }
}

function computerScore() {
    let incrementComputerScore = parseInt(computerScore.innerText);
    computerScore.innerText = ++incrementComputerScore;
}

function userScore() {
    let incrementuserScore = parseInt(userScore.innerText);
    userScore.innerText = ++incrementuserScore;
}












































