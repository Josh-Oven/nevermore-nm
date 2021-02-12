let contactButton = document.getElementById('contact-button');
let buttonStyle = contactButton.style;
let menuCloseButton = document.getElementById('menu-close-button-container')
let contactMenu = document.getElementById('contact-menu');
let menuStyle = contactMenu.style;
let menuDisplay = false;


let menuToggle = () => {
  if (menuDisplay === false) {
    menuDisplay = true
    menuStyle.display = 'flex';
  } else if (menuDisplay === true) {
    menuDisplay = false
    menuStyle.display = 'none';
  }
}

contactButton.addEventListener('click', menuToggle)
menuCloseButton.addEventListener('click', menuToggle)
