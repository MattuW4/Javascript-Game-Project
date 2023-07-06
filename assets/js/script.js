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

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");

btn.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("myModal").style.display = "block";
}