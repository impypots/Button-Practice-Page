let card1 = document.querySelector("#card");

card1.addEventListener("click", flipCard);

function flipCard() {
    card1.className === "flip-class" ? card1.classList.remove("flip-class") : card1.classList.add("flip-class");
}