
import { delSavedStates } from "./saving-script.js"

const encyclopediaBtn = document.getElementById("encyclopedia-button");
const sidebarContainer = document.getElementById("sidebar-overlay");
const sidebarCloseBtn = document.getElementById("sidebar-close");
const sidebarDelBtn = document.getElementById("sidebar-delete");


function showSidebar() {
    sidebarContainer.style.display = "block";
}

encyclopediaBtn.onclick = function openEncyclopedia() {
    showSidebar();
}

sidebarCloseBtn.onclick = function closeSidebar() {
    sidebarContainer.style.display = "none";
}

sidebarDelBtn.onclick = function deleteProgress() {
    delSavedStates();
}
