
const rollCountDisplay = document.getElementById("roll-count");
const commonRollCountDisplay = document.getElementById("roll-count-common");
const uncommonRollCountDisplay = document.getElementById("roll-count-uncommon");
const rareRollCountDisplay = document.getElementById("roll-count-rare");
const veryrareRollCountDisplay = document.getElementById("roll-count-very-rare");
const voidRollCountDisplay = document.getElementById("roll-count-void");
const midastouchRollCountDisplay = document.getElementById("roll-count-midas-touch");
const therarestRollCountDisplay = document.getElementById("roll-count-the-rarest");

let currentRollCount = 0;
let currentCommonRollCount = 0;
let currentUncommonRollCount = 0;
let currentRareRollCount = 0;
let currentVeryrareRollCount = 0;
let currentVoidRollCount = 0;
let currentMidastouchRollCount = 0;
let currentTherarestRollCount = 0;

export function updateSavedState() {
    rollCountDisplay.innerHTML = `Total Rolls: ${currentRollCount}`;
    commonRollCountDisplay.innerHTML = `Total Rolls: ${currentCommonRollCount}`;
    uncommonRollCountDisplay.innerHTML = `Total Rolls: ${currentUncommonRollCount}`;
    rareRollCountDisplay.innerHTML = `Total Rolls: ${currentRareRollCount}`;
    veryrareRollCountDisplay.innerHTML = `Total Rolls: ${currentVeryrareRollCount}`;
    voidRollCountDisplay.innerHTML = `Total Rolls: ${currentVoidRollCount}`;
    midastouchRollCountDisplay.innerHTML = `Total Rolls: ${currentMidastouchRollCount}`;
    therarestRollCountDisplay.innerHTML = `Total Rolls: ${currentTherarestRollCount}`;
}

export function addRoll(x) {
    currentRollCount++;
    localStorage.setItem("savedRollCount", currentRollCount);
    
     if ( x === 1 ) {
        currentCommonRollCount++;
        localStorage.setItem("savedCommonRollCount", currentCommonRollCount);
    } else if ( x === 2 ) {
        currentUncommonRollCount++;
        localStorage.setItem("savedUncommonRollCount", currentUncommonRollCount);
    } else if ( x === 3 ) {
        currentRareRollCount++;
        localStorage.setItem("savedRareRollCount", currentRareRollCount);
    } else if ( x === 4 ) {
        currentVeryrareRollCount++;
        localStorage.setItem("savedVeryrareRollCount", currentVeryrareRollCount);
    } else if ( x === 5 ) {
        currentVoidRollCount++;
        localStorage.setItem("savedVoidRollCount", currentVoidRollCount);
    } else if ( x === 6 ) {
        currentMidastouchRollCount++;
        localStorage.setItem("savedMidastouchRollCount", currentMidastouchRollCount);
    } else if ( x === 7 ) {
        currentTherarestRollCount++;
        localStorage.setItem("savedTherarestRollCount", currentTherarestRollCount);
    }
    updateSavedState();
}
export function delSavedStates() {
    currentRollCount = 0;
    localStorage.removeItem("savedRollCount");
    currentCommonRollCount = 0;
    localStorage.removeItem("savedCommonRollCount");
    currentUncommonRollCount = 0;
    localStorage.removeItem("savedUncommonRollCount");
    currentRareRollCount = 0;
    localStorage.removeItem("savedRareRollCount");
    currentVeryrareRollCount = 0;
    localStorage.removeItem("savedVeryrareRollCount");
    currentVoidRollCount = 0;
    localStorage.removeItem("savedVoidRollCount");
    currentMidastouchRollCount = 0;
    localStorage.removeItem("savedMidastouchRollCount");
    currentTherarestRollCount = 0;
    localStorage.removeItem("savedTherarestRollCount");




    updateSavedState();
}

document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("savedRollCount")) {
        currentRollCount += localStorage.getItem("savedRollCount");
    } else {
        localStorage.setItem("savedRollCount", 0);
        currentRollCount += 0;
    }
    if(localStorage.getItem("savedCommonRollCount")) {
        currentCommonRollCount += localStorage.getItem("savedCommonRollCount");
    } else {
        localStorage.setItem("savedCommonRollCount", 0);
        currentCommonRollCount += 0;
    }

    if(localStorage.getItem("savedUncommonRollCount")) {
        currentUncommonRollCount += localStorage.getItem("savedUncommonRollCount");
    } else {
        localStorage.setItem("savedUncommonRollCount", 0);
        currentUncommonRollCount += 0;
    }

    if(localStorage.getItem("savedRareRollCount")) {
        currentRareRollCount += localStorage.getItem("savedRareRollCount");
    } else {
        localStorage.setItem("savedRareRollCount", 0);
        currentRareRollCount += 0;
    }
    if(localStorage.getItem("savedVeryrareRollCount")) {
        currentVeryrareRollCount += localStorage.getItem("savedVeryrareRollCount");
    } else {
        localStorage.setItem("savedVeryrareRollCount", 0);
        currentVeryrareRollCount += 0;
    }

    if(localStorage.getItem("savedVoidRollCount")) {
        currentVoidRollCount += localStorage.getItem("savedVoidRollCount");
    } else {
        localStorage.setItem("savedVoidRollCount", 0);
        currentVoidRollCount += 0;
    }

    if(localStorage.getItem("savedMidastouchRollCount")) {
        currentMidastouchRollCount += localStorage.getItem("savedMidastouchRollCount");
    } else {
        localStorage.setItem("savedMidastouchRollCount", 0);
        currentMidastouchRollCount += 0;
    }

    if(localStorage.getItem("savedTherarestRollCount")) {
        currentTherarestRollCount += localStorage.getItem("savedTherarestRollCount");
    } else {
        localStorage.setItem("savedTherarestRollCount", 0);
        currentTherarestRollCount += 0;
    }


    updateSavedState();
});
