const buttonNodes = document.querySelectorAll("button");
const buttons = Array.from(buttonNodes);
const displayRoundWinner = document.querySelector(".round-winner");

let userScore = 0;
let computerScore = 0;
let rounds = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        round(computersChoice(), button.value);
        updateUI(userScore, computerScore, rounds);
        checkForWinner(userScore, computerScore);
    })
})

function computersChoice() {
    let randomChoice = Math.ceil(Math.random() * 3);
    
    switch (randomChoice) {
        case 1: 
            return "schere";
        case 2: 
            return "stein";
        case 3: 
            return "papier";
    }
}

function round(computer, user) {
    switch (true) {
        case (computer == user):
            displayRoundWinner.textContent = "Unentschieden!";
            break;
        case (computer == "schere" && user == "stein"):
            displayRoundWinner.textContent = "Punkt für dich!";
            userScore++;
            break;
        case (computer == "stein" && user == "papier"):
            displayRoundWinner.textContent = "Punkt für dich!";
            userScore++;
            break;
        case (computer == "papier" && user == "schere"):
            displayRoundWinner.textContent = "Punkt für dich!";
            userScore++;
            break;
        default:
            displayRoundWinner.textContent = "Jabba macht einen Punkt!";
            computerScore++;
            break;
    }
    setTimeout(() => {
        displayRoundWinner.textContent = "";
    }, 1500);
    rounds++;
}

function updateUI(user, computer, roundsCount) {
    document.querySelector(".your-points").textContent = user;
    document.querySelector(".jabba-points").textContent = computer;
    document.querySelector(".rounds").textContent = roundsCount;
}

function checkForWinner(user, computer) {
    if (user == 3) {
        return "user";
    } else if (computer == 3) {
        return "computer";
    }
}