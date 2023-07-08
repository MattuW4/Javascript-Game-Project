// Main game 

let buttons = document.querySelectorAll(".player-weapon-choice-button");
let playerTotal = document.getElementById("playerScore");
let computerTotal = document.getElementById("computerScore");
let playerImage = document.getElementsByClassName(".hands-image");
let choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let accruedRounds = 0;

for (let button of buttons) {
    button.addEventListener("click", function () {
        let userChoice = this.getAttribute("data-choice");
        runGame(userChoice);
        console.log(userChoice);
    });
}

function runGame(userChoice) {

    // playerImage.src = `assets/images/${choices[userChoice]}.png`;
    // playerImage.alt = choices[userChoice];

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);

    let result = checkWinner(choices[computerChoice], choices[userChoice]);

    updateScores(result);
}

function checkWinner(player, computer) {
    let arenaVictorOutput = document.querySelector(".arenaVictorOutput");
    if (player === computer) {
        arenaVictorOutput.textContent = "Draw!";
    }
    if (player == "rock") {
        if (computer === "paper") {
            arenaVictorOutput.textContent += "Computer won!";
            computerScore++;
        } else {
            arenaVictorOutput.textContent += "Player won!";
            playerScore++;
        }
    }
    else if (player == "scissors") {
        if (computer === "rock") {
            arenaVictorOutput.textContent += "Computer won!";
            computerScore++;
        } else {
            arenaVictorOutput.textContent += "Player won!";
            playerScore++;
        }
    }
    else if (player == "paper") {
        if (computer === "scissors") {
            arenaVictorOutput.textContent += "Computer won!";
            computerScore++;
        } else {
            arenaVictorOutput.textContent += "Player won!";
            playerScore++;
        }
    }
}



// Modal 

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