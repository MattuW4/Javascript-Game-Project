// Main game 
const buttons = document.querySelectorAll(".player-weapon-choice-button");
const choices = ["rock", "paper", 'scissors'];
const computerRandom = choices[Math.floor(Math.random() * choices.length)];
const updateScores = document.getElementsByClassName("playerScore", "computerScore");
const result = document.getElementById("arenaVictorOutput");
const computerScore = document.getElementById("computerScore");
const userScore = document.getElementById("userScore");

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
        console.log(playerChoice);
    });

}

function playGame(playerChoice) {
    let computerRandom = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerRandom);
    function checkWinner() {
        if (playerChoice === computerRandom) {
            arenaVictorOutput.textContent = "Draw!";
        } else if (playerChoice == "rock") {
            if (computerRandom === "paper") {
                arenaVictorOutput.textContent += "Computer won!";
                computerScore.innerHTML++;
            } else {
                arenaVictorOutput.textContent += "Player won!";
                userScore.innerHTML++;
            }
        }
        else if (playerChoice == "scissors") {
            if (computerRandom === "rock") {
                arenaVictorOutput.textContent += "Computer won!";
                computerScore.innerHTML++;
            } else {
                arenaVictorOutput.textContent += "Player won!";
                userScore.innerHTML++;
            }
        }
        else if (playerChoice == "paper") {
            if (computerRandom === "scissors") {
                arenaVictorOutput.textContent += "Computer won!";
                computerScore.innerHTML++;
            } else {
                arenaVictorOutput.textContent += "Player won!";
                userScore.innerHTML++;
            }
        }
    }
    let result = checkWinner(choices[computerRandom], choices[playerChoice]);
    function updateScores(result) {
        if (arenaVictorOutput === "Computer won!") {
            let incrementComputerScore = parseInt(computerScore.innerText);
            computerScore.innerText = ++incrementComputerScore;
        }
        else if (arenaVictorOutput === "Player won!") {
            let incrementuserScore = parseInt(userScore.innerText);
            userScore.innerText = ++incrementuserScore;
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