
const menuOpenButton = document.querySelector('#menu-open-btn');
const menuCloseButton = document.querySelector('#menu-close-btn');

// open menu when open button is clicked
menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu'); // toggle is used to add or remove the class, if class is present it will remove it, if not present it will add it
})
// close menu when close button is clicked
menuCloseButton.addEventListener('click', () => {
    menuOpenButton.click(); // simulating a click on the open button to close the menu
})