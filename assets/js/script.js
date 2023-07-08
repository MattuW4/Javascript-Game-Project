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