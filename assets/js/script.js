// Main game 

// Variables
const choiceButtons = document.querySelectorAll("[data-choice");
const winnerOutput = document.querySelector("[arenaVictorOutput]");
const computerCount = document.querySelector("[computerScore]");
const round = document.querySelector("[roundNumber]");
const playerCount = document.querySelector("[playerScore]");

const rounds = 0;
const playerScore = 0;
const computerScore = 0;

const choices = [
    {
        name: "rock",
        beats: "paper"
    },
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    }
];
// Button event listener to grab name property value
choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener("click", event => {
        let choiceName = choiceButton.dataset.choice;
        let choice = choices.find(choice => choice.name === choiceName);
        console.log(choice);
        makeChoice(choice);
    });
});

// Function to create random computer number
function computerRandom() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    randomChoice = choices.toString();
    console.log(randomChoice);
    return choices[randomChoice];

}

// Turn action
function makeChoice(choice) {
    const enemyChoice = computerRandom();
    //const playerWins = winner(choice, enemyChoice)
    //const computerWins = winner(enemyChoice, choice)
}

//Game over function
if (rounds == 5) {
    gameOver();
}

// Determine outcome
const outcome = (choice, computerRandom) => {
    let resultOutput = document.querySelector(".arenaVictorOutput");
    let playerScoreDisplay = document.querySelector(".playerScore");
    let computerScoreDisplay = document.querySelector(".computerScore");
    if (player === computer) {
        resultOutput.textContent = "Draw!";
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

// Game over feature
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
// Modal for help button

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


