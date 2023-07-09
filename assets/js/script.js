// Main game 

// Variables
const game = () => {
    let playerCount = 0;
    let computerCount = 0;
    let roundCount = 0;

    const playGame = () => {
        const rockChoice = document.querySelector(".rock");
        const paperChoice = document.querySelector(".paper");
        const scissorsChoice = document.querySelector(".scissors");
        const playerChoices = [rockChoice, paperChoice, scissorsChoice];
        const computerChoices = ["rock", "paper", "scissors"];

        playerChoices.forEach(choice => {
            choice.addEventListener("click", function () {
                let roundIncrease = document.querySelector(".roundNumber");
                roundCount++;
                let randomChoice = Math.floor(Math.random() * 3);
                let computerSelection = computerChoices[randomChoice];
                console.log(computerSelection);
                console.log(choice);
                victor(this.innerText, computerSelection);

                if (roundCount == 5) {
                    gameOver(playerChoices, roundIncrease);
                }
            });
        });
    };

    let victor = (player, computer) => {
        let resultOutput = document.querySelector(".arenaVictorOutput");
        let playerScoreDisplay = document.querySelector(".playerScore");
        let computerScoreDisplay = document.querySelector(".computerScore");
        if (player === computer) {
            resultOutput.textContent = "Draw";
        } else if (player == "rock") {
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

    let gameOver = (playerChoices, roundIncrease) => {
        const chooseWeapon = document.querySelector(".weapon-choice-instruction");
        const resultOutput = document.querySelector(".arenaVictorOutput");
        const replayButton = document.querySelector(".replay");

        playerChoices.forEach(choice => {
            choice.style.display = "none";
        });
        chooseWeapon.innerText = "Game Over!";
        replayButton.innerHTML += "<button>Replay: to be a weiner</button >";
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


