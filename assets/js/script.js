//Variable declarations
const selectionButtons = document.querySelectorAll("[data-selection]");
const CHOICES = [{
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


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
        const selectionName = selectionButton.dataset.selection;
        const selection = CHOICES.find(selection => selection.name === selectionName);
        makeSelection(selection);
    });
});

function makeSelection(selection) {
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);
    console.log(selection);


    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}

function addSelectionResult(selection, winner) {

}
