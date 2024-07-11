const rollButton = document.getElementById("roll-button");
const rarityContainer = document.getElementById("rarity-container");
const rarityText = document.getElementById("rarity-text");
const chanceText= document.getElementById("chance-text");



function getRarity() {
    let rarityNumber = Math.random();
    console.log(rarityNumber);

    if ( rarityNumber <= 0.5) {
        rarityText.style.color = "darkgray";
        rarityText.innerHTML = "common";
        chanceText.innerHTML = "50%";
    };
    if (rarityNumber > 0.5 && rarityNumber >= 0.75) {
        rarityText.style.color = "gray";
        rarityText.innerHTML = "uncommon";
        chanceText.innerHTML = "25%";
    };
    if (rarityNumber > 0.75 && rarityNumber >= 0.875) {
        rarityText.style.color = "green";
        rarityText.innerHTML = "rare";
        chanceText.innerHTML = "12.5%";
    };

};








document.addEventListener("DOMContentLoaded", function() {
    rollButton.onclick = function() {
        console.log("Doing a Roll")

        rollButton.disabled = true;

        let i = 0;
        let rollSpeed = 0.1
        let rollSpeedforTimeout = 100;

        function animateText() {
            if (i < 10) {

                getRarity();

                rarityText.style.animation = "none";  // Reset animation
                void rarityText.offsetWidth;  // Trigger reflow
                rarityText.style.animation = `textJump ${rollSpeed}s forwards`;  // Start animation

                i++;
                setTimeout(animateText, rollSpeedforTimeout);  // Call animateText again after 0.5s

                rollSpeed += 0.05;
                rollSpeedforTimeout += 50;

                if (i == 10) {
                    rollButton.disabled = false;
                }
            }
        }

        animateText();
    };
});