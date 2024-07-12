
const rollCountDisplay = document.getElementById("roll-count");
let currentRollCount = 0;

export function updateSavedState() {
    rollCountDisplay.innerHTML = `Total Rolls: ${currentRollCount}`;
}

export function addRoll() {
    currentRollCount++;
    localStorage.setItem("savedRollCount", currentRollCount);
}

document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("savedRollCount")) {
        currentRollCount += localStorage.getItem("savedRollCount");
    } else {
        localStorage.setItem("savedRollCount", 0);
        currentRollCount += 0;
    }

    rollCountDisplay.innerHTML = `Total Rolls: ${currentRollCount}`;
});
