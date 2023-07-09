// Main game 

// Variables
const game = () => {
    let playerCount = 0;
    let computerCount = 0;
    let roundCount = 0;

    const playGame = () => {
        const rockChoice = document.getElementById("rock");
        const paperChoice = document.getElementById("paper");
        const scissorsChoice = document.getElementById("scissors");
        const playerChoices = [rockChoice, paperChoice, scissorsChoice];
        const computerChoices = ["rock", "paper", "scissors"];

        playerChoices.forEach(choice => {
            choice.addEventListener("click", function () {
                let roundIncrease = document.querySelector(".roundNumber");
                roundCount++;
                roundIncrease++;

                const randomChoice = Math.floor(Math.random() * 3);
                const computerSelection = computerChoices[randomChoice];

                victor(this.innerText, computerSelection);

                if (roundCount == 5) {
                    gameOver(playerChoices, roundIncrease);
                }
            });
        });
    };

    const victor = (player, computer) => {
        const resultOutput = document.querySelector(".arenaVictorOutput");
        const playerScoreDisplay = document.querySelector(".playerScore");
        const computerScoreDisplay = document.querySelector(".computerScore");
        if (player === computer) {
            resultOutput.textContent = "Draw";
        } else if (player === "rock") {
            if (computer == "paper") {
                resultOutput.textContent = "Computer wins!";
                computerCount++;
                computerScoreDisplay.textContent = computerCount;

            } else {
                resultOutput.textContent = "Player wins!";
                playerCount++;
                playerScoreDisplay.textContent = playerCount;
            }
        }
        else if (player == "scissors") {
            if (computer == "rock") {
                resultOutput.textContent = "Computer wins!";
                computerCount++;
                computerScoreDisplay.textContent = computerCount;
            } else {
                resultOutput.textContent = "Player wins!";
                playerCount++;
                playerScoreDisplay.textContent = playerCount;
            }
        }
        else if (player == "paper") {
            if (computer == "scissors") {
                resultOutput.textContent = "Computer wins!";
                computerCount++;
                computerScoreDisplay.textContent = computerCount;
            } else {
                resultOutput.textContent = "Player wins!";
                playerCount++;
                playerScoreDisplay.textContent = playerCount;
            }
        }
    };

    const gameOver = (playerChoices, roundIncrease) => {
        const chooseWeapon = document.querySelector(".weapon-choice-instruction");
        const resultOutput = document.querySelector(".arenaVictorOutput");
        const replayButton = document.querySelector(".arenaVictorOutput");

        playerChoices.forEach(choice => {
            choice.style.display = "none";
        });
        chooseWeapon.innerText = "Game Over!";
        roundIncrease.style.display = "none";

        if (playerCount > computerCount) {
            resultOutput.style.fontSize = "3rem";
            resultOutput.style.fontSize = "You are a weiner!";
        }
        else if (playerCount < computerCount) {
            resultOutput.style.fontSize = "3rem";
            resultOutput.style.fontSize = "You are a loser!";
        } else {
            resultOutput.style.fontSize = "3rem";
            resultOutput.style.fontSize = "Draw! (computer is the winner really, loser...";
        }
        replayButton.innerText = "Replay: to and be a weiner";
        replayButtonstyle.display = "flex";
        replayButton.addEventListener("click", () => {
            window.location.reload();
        });
    };
    playGame();
};
game();




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


