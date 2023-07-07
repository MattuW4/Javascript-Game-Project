//Variable declarations
const modal = document.getElementById("my-modal");
const openModal = document.getElementById("open-modal-button");
const closeModal = document.querySelector(".return-button");


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

// Modal open and hide 
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
// Informed by Math Project, Code Institue and Web Dev Simplified Tutorial
// Wait for the DOM to load before running the game
// Get the game section button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function () {
    let gameSectionButtons = document.querySelectorAll('.player-weapon-choice-button');

    for (let gameSectionButton of gameSectionButtons) {

        gameSectionButton.addEventListener("click", function () {
            // Identify clicked gameSectionButton
            let choiceSelected = this.getAttribute("data-choice");
            let userChoice = choices.find(choice => choice.name === choiceSelected);

            console.log(userChoice);
            // Write selection into player choice display
            document.getElementById("playerChoice").innerHTML = `${choiceSelected}`;
        });
    }
});
