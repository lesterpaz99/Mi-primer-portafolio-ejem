const mobile = window.matchMedia("only screen and (max-width: 476px)");

const menuButton = document.querySelector(".main-header__logo");
const menu = document.querySelector(".main-header__menu");
const menuItems = document.querySelectorAll(".menu-item");
const menuItemsArray = Array.from(menuItems);

validation(mobile);

function openMenu() {
    menu.classList.toggle("is-active");
}

function validation(event) {
    if (event.matches) {
        menuButton.addEventListener("click", openMenu); 
        menuItemsArray.forEach(element => {
            element.addEventListener("click", openMenu);
        }); 
    } else {
        menuButton.removeEventListener("click", openMenu);
        menuItemsArray.forEach(element => {
            element.removeEventListener("click", openMenu);
        });
    }
}