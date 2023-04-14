const startButton = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const levelLabel = document.querySelector("h3");
const link = document.querySelector("a");
let fraction = "empire";
let level = 1;

link.addEventListener("click", () => {
    event.preventDefault();
    level += 1;
    levelLabel.textContent = `Level ${level}`;
})


startButton.addEventListener("click", function startButtonAction() {
    event.preventDefault();
    overlay.classList.add("hidden");
    chooseStarfighter();
    this.removeEventListener("click", startButtonAction);
});

function chooseStarfighter() {
    const selection = document.querySelector("input:checked").value;
    let image = document.querySelector(".starship>img");

    if (selection == "tie") {
        image.src = "../Images/TIE-Fighter.png";
        image.alt = "Bild eines TIE-Fighters";
        fraction = "empire";
        
    } else {
        image.src = "../Images/x-wing.png";
        image.style.width = "90px";
        image.alt = "Bild eines X-Wings";
        fraction = "rebellion";
    }
}
