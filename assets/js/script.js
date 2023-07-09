// Main game 

// Variables
const game = () => {
    const playerCount = 0;
    const computercount = 0;
    const roundCount = 0;

    const playGame = () => {
        const rockChoice = document.getElementById("rock");
        const paperChoice = document.getElementById("paper");
        const scissorsChoice = document.getElementById("scissors");
        const playerChoices = [rockChoice, paperChoice, scissorsChoice];
        const computerChoices = ["rock", "paper", "scissors"];

        playerChoices.forEach(choice => {
            choice.addEventListener("click", function () {
                const roundIncrease = document.querySelector(".roundNumber");
                roundCount++;
                roundIncrease.innerHTML++;

                const randomChoice = Math.floor(Math.random() * 3);
                const computerSelection = computerChoices[randomChoice];

                ServiceWorkerContainer(this.innerText, computerSelection);

                if (roundCount == 5) {
                    gameOver(playerChoices, roundIncrease);
                }
            });
        });
    };




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


