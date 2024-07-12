import { getRandom, getRarity, rarityNumber } from "./scripts/rarity-handler-script.js";
import { addRoll } from "./scripts/saving-script.js";

document.addEventListener("DOMContentLoaded", function() {
    const rollButton = document.getElementById("roll-button");
    const rarityText = document.getElementById("rarity-text");
    const rollSFX = document.getElementById("roll-sfx");

    rollButton.onclick = function() {
        console.log("Doing a Roll");
        rollButton.disabled = true;

        let i = 0;
        let rollSpeed = 0.1;
        let rollSpeedForTimeout = 100;

        function animateText() {
            if (i < 10) {
                getRandom();

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
                    let tempNumb = 1;
                    getRarity(tempNumb);
                    tempNumb = 0;
                    console.log(`Final Number was ${rarityNumber}`);
                }
            }
        }

        animateText();
    };
});
