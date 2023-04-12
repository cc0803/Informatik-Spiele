const startButton = document.querySelector("button");
const overlay = document.querySelector(".overlay");

startButton.addEventListener("click", () => {
    event.preventDefault();
    overlay.classList.add("hidden");
    chooseStarfighter();
})

function chooseStarfighter() {
    const selection = document.querySelector("input:checked").value;
    let starfighter;
    let image = document.querySelector(".starship>img");
    if (selection == "tie") {
        image.src = "../Images/Tie-Fighter.png";
        image.alt = "Bild eines TIE-Fighters";
        starfighter = document.querySelector(".starship");
    } else {
        image.src = "../Images/x-wing.png";
        image.alt = "Bild eines X-Wings";
    }
}
