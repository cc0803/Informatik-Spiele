const startButton = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const levelLabel = document.querySelector("h3");
const link = document.querySelector("a.main");
const img = document.querySelector("a>img");
let fraction = "empire";
let level = 1;
let toggleVisible;

// Variabeln für Geschwindigkeit und höhe des Raumschiffes
const container = document.querySelector(".container");
const starship = document.querySelector(".starship")

// Verändern des Levels bei click
link.addEventListener("click", () => {
    event.preventDefault();
    level += 1;
    levelLabel.textContent = `Level ${level}`;
    levelChange(level);
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
        image.src = "../Images/x-wing.webp";
        image.alt = "Bild eines X-Wings";
        fraction = "rebellion";
    }
}

function makeInterval() {
    if (!starship.classList.contains("visible")) {
        starship.classList.add("visible");
    } else {
        starship.classList.remove("visible");
    }
}

function stopInterval() {
    clearInterval(toggleVisible);
    toggleVisible = null;
}

function levelChange(level) {
    switch (level) {
        case 2:
            starship.style.animation = "marqueeVertical 5s linear infinite";
            break;
        case 3:
            container.setAttribute("style", "align-items: end;");
            break;
        case 4:
            starship.style.animation = "marqueeVertical 4s linear infinite";
            container.setAttribute("style", "justify-content: start;");
            break;
        case 5: 
            img.style.width = "55px";
            starship.style.animation = "marqueeHorizontal 4s linear infinite";
            container.setAttribute("style", "justify-content: center; align-items: start");
            break;
        case 6: 
            container.setAttribute("style", "align-items: center;");
            img.style.width = "70px";
            toggleVisible = setInterval(makeInterval, 1000)
            break;
        case 7: 
            img.style.width = "40px";
            stopInterval();
            break;
    }
}