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

let modal = document.getElementById("my-modal");
let openModal = document.getElementById("open-modal-button");
let closeModal = document.querySelector(".return-button");

openModal.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);

function showModal() {
    modal.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}


