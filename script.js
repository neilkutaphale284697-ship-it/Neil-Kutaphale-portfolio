document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio loaded successfully.");

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.style.cursor = "pointer";
        });
    });
});
