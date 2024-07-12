
import { addRoll } from "./saving-script.js";

const rarityText = document.getElementById("rarity-text");
const chanceText = document.getElementById("chance-text");

export let rarityNumber;

export function getRandom() {
    rarityNumber = Math.random();
    console.log(rarityNumber);

    getRarity()
}


export function getRarity(isFinal) {
    if (rarityNumber === 0 || rarityNumber === 0.1 || rarityNumber === 0.2 || rarityNumber === 0.3 || rarityNumber === 0.4 || rarityNumber === 0.5 || rarityNumber === 0.6 || rarityNumber === 0.7 || rarityNumber === 0.8 || rarityNumber === 0.9) {
        rarityText.style.color = "darkgoldenrod";
        rarityText.innerHTML = "Midas' Gift";
        chanceText.innerHTML = "0.00001%";
        if (isFinal === 1) {
            addRoll(6);
        };
    } else if (rarityNumber <= 0.5) {
        rarityText.style.color = "darkgray";
        rarityText.innerHTML = "common";
        chanceText.innerHTML = "50%";
        if (isFinal === 1) {
            addRoll(1);
        };
    } else if (rarityNumber <= 0.75) {
        rarityText.style.color = "gray";
        rarityText.innerHTML = "uncommon";
        chanceText.innerHTML = "25%";
        if (isFinal === 1) {
            addRoll(2);
        };
    } else if (rarityNumber <= 0.875) {
        rarityText.style.color = "green";
        rarityText.innerHTML = "rare";
        chanceText.innerHTML = "12.5%";
        if (isFinal === 1) {
            addRoll(3);
        };
    } else if (rarityNumber <= 0.9375) {
        rarityText.style.color = "blue";
        rarityText.innerHTML = "very rare";
        chanceText.innerHTML = "6.25%";
        if (isFinal === 1) {
            addRoll(4);
        };
    } else if (rarityNumber === 1) {
        rarityText.style.color = "gold";
        rarityText.innerHTML = "The Rarest";
        chanceText.innerHTML = "0.000001%";
        if (isFinal === 1) {
            addRoll(7);
        };
    }  else {
        rarityText.style.color = "black";
        rarityText.innerHTML = "void";
        chanceText.innerHTML = "6.25%"
        if (isFinal === 1) {
            addRoll(5);
        };
    };
};
