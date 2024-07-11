document.addEventListener("DOMContentLoaded", function() {
    const rollButton = document.getElementById("roll-button");
    const rarityText = document.getElementById("rarity-text");
    const chanceText = document.getElementById("chance-text");
    const rollSFX = document.getElementById("roll-sfx");

    function getRarity() {
        let rarityNumber = Math.random();
        console.log(rarityNumber);

        if (rarityNumber <= 0.5) {
            rarityText.style.color = "darkgray";
            rarityText.innerHTML = "common";
            chanceText.innerHTML = "50%";
        } else if (rarityNumber <= 0.75) {
            rarityText.style.color = "gray";
            rarityText.innerHTML = "uncommon";
            chanceText.innerHTML = "25%";
        } else if (rarityNumber <= 0.875) {
            rarityText.style.color = "green";
            rarityText.innerHTML = "rare";
            chanceText.innerHTML = "12.5%";
        } else {
            rarityText.style.color = "blue";
            rarityText.innerHTML = "very rare";
            chanceText.innerHTML = "12.5%";
        }
    }

    rollButton.onclick = function() {
        console.log("Doing a Roll");
        rollButton.disabled = true;

        let i = 0;
        let rollSpeed = 0.1;
        let rollSpeedForTimeout = 100;

        function animateText() {
            if (i < 10) {
                getRarity();

                // Clone the audio element and play the clone
                let clonedRollSFX = rollSFX.cloneNode(true);
                clonedRollSFX.play();

                rarityText.style.animation = "none";  // Reset animation
                void rarityText.offsetWidth;  // Trigger reflow
                rarityText.style.animation = `textJump ${rollSpeed}s forwards`;  // Start animation

                i++;
                setTimeout(animateText, rollSpeedForTimeout);  // Call animateText again after rollSpeedForTimeout

                rollSpeed += 0.05;
                rollSpeedForTimeout += 50;

                if (i === 10) {
                    rollButton.disabled = false;
                }
            }
        }

        animateText();
    };
});
