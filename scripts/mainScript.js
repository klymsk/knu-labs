// Меню
const activityButton = document.getElementById("activityButton");
const subMenu = document.getElementById("activeSubmenu");

activityButton.addEventListener("click", function(e) {
    e.preventDefault();
    if (subMenu.style.display === "flex") {
        subMenu.style.display = "none";
    }
    else {
        subMenu.style.display = "flex";
    }
});