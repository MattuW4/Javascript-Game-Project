//Variable declarations
const choices = [{
    name: 'rock',
    image: './assets/images/Rock.png',
    beats: ['scissors', 'lizard']
},
{
    name: 'paper',
    image: './assets/images/Paper.png',
    beats: ['rock', 'spock']
},
{
    name: 'scissors',
    image: './assets/images/Scissors.png',
    beats: ['paper', 'lizard']
},
{
    name: 'lizard',
    image: './assets/images/Lizard.png',
    beats: ['paper', 'spock']
},
{
    name: 'spock',
    image: './assets/images/Spock.png',
    beats: ['rock', 'scissors']
}
];

const modal = document.getElementById("my-modal");
const openModal = document.getElementById("open-modal-button");
const closeModal = document.querySelector(".return-button");

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

// Informed by the Code Institute Love Maths project
// Wait for the DOM to finish loading before running game
// Get button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".player-weapon-choice-button");

    // Use function to write player choice to output in arena section
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-choice") === "") {

            } else {
                let gameType = this.getAttribute("data-choice");
                document.getElementById("playerChoice").innerHTML = `${gameType}`;
            }
        });
    }
});

